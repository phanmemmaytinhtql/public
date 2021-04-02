from Distance import *
import numpy as np
import pandas as pd
from pandas.api.types import is_numeric_dtype
import copy


class MlModel:

    def __init__(self):
        self.df = None
        self.X = None
        self.Y = None
        self.features = None
        self.max = self.min = None
        self._look_up = None
        self.attr_weight = None

    def fit(self, dataset, features, target, attr_weight=None):
        self.df = copy.deepcopy(dataset)  # assume dataset is dataframe
        self.features = features  # list of feature specified by user
        self.attr_weight = [1] * len(features) if attr_weight is None else attr_weight

        self._preprocess(self.df)  # clean, encode, normalize data before

        self.X = self.df[features]  # spliting dataframe into X train
        self.Y = self.df[target]    # and Y train

    def predict(self, dataset):
        raise NotImplementedError
        # Problem: Must be re-implemented by subclass -> research Metaclass

    def _preprocess(self, dataset):  # completed
        self._clean_data(dataset)   # clean missing values
        self._encode(dataset)       # encode non-numeric values to numeric
        self._normalize(dataset)    # normalize features

    def _clean_data(self, dataset):  # completed
        dataset.dropna(inplace=True)

    def _encode(self, dataset):  # completed
        if self._look_up is None:       # if we are encoding training set
            self._look_up = dict()      # initialize lookup table as empty
            for col in dataset:
                if not is_numeric_dtype(dataset[col]):             # for each column that is not numeric
                    for val, label in enumerate(dataset[col].unique()):   # attach a encode value for each of its label
                        self._look_up[label] = val                        # add that value to the lookup table

        dataset.replace(self._look_up, inplace=True)

    def _normalize(self, dataset):  # completed
        if self.max is None:                # if we are normalizing the training set
            self.max, self.min = dataset.max(), dataset.min()        # find max, min value for each columns
        for row in dataset.index:           # for each row in dataset
            for col in self.features:           # for each feature in the instance
                dataset.at[row, col] /= (self.max[col] - self.min[col])


class KNeighbors(MlModel):
    def __init__(self, k):
        super().__init__()
        self.k = k              # number of nearest neighbors

    def nearest_neighbors(self, z):
        """Find k nearest neighbors of instance x.

        Return [index of neighbor instances ins dataframe, distance, distance weight]."""
        neighbors = []  # an empty list to store neighbors index, distance, weight to training sets

        for row in self.X.index:                                # for each instance in training set
            dist = euclid_distance(self.X.loc[row], z, self.attr_weight)    # compute distance
            weight = self._compute_distance_weight(dist)                    # compute distance weight
            neighbors.append([row, dist, weight])

        neighbors.sort(key=lambda item: item[1])

        return neighbors[:self.k]  # return k nearest neighbor

    def _compute_distance_weight(self, d):  # completed
        return 1 / (1 + d)


class KNeighborsClassifier(KNeighbors):

    def predict(self, dataset):

        dataset = copy.deepcopy(dataset)
        self._preprocess(dataset)

        prediction = pd.Series(index=dataset.index, dtype=int)

        for row in dataset.index:  # for each test instance
            neighbors = self.nearest_neighbors(dataset.loc[row, self.features])  # find k nearest neighbor
            class_rank = {c:0 for c in self.Y.unique()}
            for nei_row, dist, weight in neighbors:
                class_rank[self.Y[nei_row]] += weight
            prediction.at[row] = max(class_rank, key=class_rank.get)
        return prediction


class KNeighborsRegressor(KNeighbors):

    def predict(self, dataset):

        dataset = copy.deepcopy(dataset)
        self._preprocess(dataset)

        prediction = pd.Series(index=self.df.index, dtype=int)

        for row in dataset.index:  # for each test instance
            neighbors = self.nearest_neighbors(dataset.loc[row, self.features])
            prediction.at[row] = sum(weight * self.Y[nei_row] for nei_row, dist, weight in neighbors) \
                                / sum(weight for nei_index, dist, weight in neighbors)


# df = pd.read_csv("healthcare-dataset-stroke-data.csv", index_col="id")
# features = ['gender','age','hypertension','heart_disease','ever_married','work_type','Residence_type','avg_glucose_level','bmi','smoking_status']
# target = 'stroke'
# print(df[target].tail(18))

df = pd.read_csv("iris.csv")
features = ['A', 'B', 'C', 'D']
target = 'Type'
print(df[target].tail(24))

model = KNeighborsClassifier(10)
model.fit(df.head(105), features, target)
print(model.predict(df[features].tail(24)).head(24))
print(model._look_up)