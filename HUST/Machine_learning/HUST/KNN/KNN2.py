from Distance import *
import numpy as np
import pandas as pd
from pandas.api.types import is_numeric_dtype
import copy


class KNeighbors:
    def __init__(self, k):
        self.k = k
        self.X = None
        self.Y = None
        self.df = None
        self.features = None
        self.look_up = None
        self.max = self.min = None
        self.attr_weight = None

    def fit(self, dataset, features, target, attr_weight=None):
        """Save data and fit hyper-parameters.

        dataframe/numpy/nested list:param X_train:
        dataframe/numpy/list:param y_train:
        none:return:
        """
        self.df = copy.deepcopy(dataset)    # assume dataset is dataframe
        self.features = features            # list of feature specified by user
        self.preprocess(self.df)            # clean, encode, normalize data before
        self.X = self.df[features]          # spliting dataframe into X train
        self.Y = self.df[target]            # and Y train
        self.attr_weight = [1]*len(features) if attr_weight is None else attr_weight

    def predict(self, dataset):
        raise NotImplementedError

    def nearest_neighbors(self, z):
        """Find k nearest neighbors of instance x.

        Return [index of neighbor instances ins dataframe, distance, distance weight]."""
        neighbors = []                      # an empty list to store neighbors index, distance, weight to training sets

        for row in self.X.index:            # for each instance in training set
            dist = euclid_distance(self.X.loc[row], z, self.attr_weight)    # compute distance
            w = self._compute_distance_weight(dist)                          # compute distance weight
            neighbors.append([row, dist, w])

        neighbors.sort(key=lambda item: item[1])

        return neighbors[:self.k]           # return k nearest neighbor


    def preprocess(self, dataset):          # completed
        self._clean_data(dataset)        # clean missing values
        self._encode(dataset)            # encode non-numeric values to numeric
        self._normalize(dataset)         # normalize features

    def _clean_data(self, dataset):          # completed
        dataset.dropna(inplace=True)

    def _encode(self, dataset):              # completed
        if self.look_up is None:            # if we are encoding training set
            self.look_up = dict()           # initialize lookup table as empty
            for col_name in dataset.columns:
                if not is_numeric_dtype(dataset[col_name]):             # for each column that is not numeric
                    unique = set(label for label in dataset[col_name])  # find unique labels of that column
                    for val, label in enumerate(unique):                # attach a encode value for each that label
                        self.look_up[(col_name, label)] = val           # add that value to the lookup table
        for index in dataset.index:                 # for each row in dataset
            for col_name in dataset:                # for each feature in the instance
                if (col_name, dataset.at[index, col_name]) in self.look_up.keys():
                    dataset.at[index, col_name] = self.look_up[(col_name, dataset.at[index, col_name])]
        # Problem: code seems to be very complicated and run not very well

    def _normalize(self, dataset):           # completed
        if self.max is None:                # if we are normalizing the training set
            self.max = dataset.max()        # find max value for each columns
            self.min = dataset.min()        # find min value for each columns
        for index in dataset.index:             # for each row in dataset
            for col_name in self.features:            # for each feature in the instance
                dataset.at[index, col_name] = dataset.at[index, col_name]/(self.max[col_name] - self.min[col_name])
        # Problem: the last for loop should be improved?

    def _compute_distance_weight(self, d):   # comleted
        return 1 / (1 + d)
        # Question: Other choices of weight formula and alpha


class KNeighborsClassifier(KNeighbors):

    def predict(self, dataset):

        # preprocess test instances before predicting
        dataset = copy.deepcopy(dataset)
        self.preprocess(dataset)

        # add KNN_predicted column to the dataset to save predicted class
        dataset.insert(len(dataset.columns), "KNN_predicted", 0)

        for index in dataset.index:     # for each test instance
            neighbors = self.nearest_neighbors(dataset.loc[index, self.features])   # find k nearest neighbor
            class_rank = [[0, c] for c in sorted(self.Y.unique())]                  # [point, class]
            for nei_index, dist, dist_weight in neighbors:
                class_rank[self.Y[nei_index]][0] += dist_weight
            dataset.at[index, "KNN_predicted"] = max(class_rank)[1]
        return dataset
        # Problem: make KNN_predicted as a separate column but keep index


class KNeighborsRegressor(KNeighbors):

    def predict(self, dataset):

        # preprocess test instances before predicting
        dataset = copy.deepcopy(dataset)
        self.preprocess(dataset)

        # add KNN_predicted column to the dataset to save predicted class
        dataset.insert(len(dataset.columns), "KNN_predicted, 0")

        for index in dataset.index:     # for each test instance
            neighbors = self.nearest_neighbors(dataset.loc[index, self.features])
            dataset.at[index, "KNN_predicted"] = sum(dist_weight * self.Y[nei_index]
                                                     for nei_index, dist, dist_weight in neighbors) \
                                                 / sum(dist_weight for nei_index, dist, dist_weight in neighbors)



# df = pd.read_csv("iris.csv")
# features = ['sepal_length', 'sepal_width', 'petal_length', 'petal_width']
# target = 'iris_class'
df = pd.read_csv("healthcare-dataset-stroke-data.csv", index_col='id')
features = ['gender','age','hypertension','heart_disease','ever_married','work_type','Residence_type','avg_glucose_level','bmi','smoking_status']
target = 'stroke'


model = KNeighborsClassifier(5)
model.fit(df, features, target)
# model.training_set()
print(model.predict(df[features].head(10)))