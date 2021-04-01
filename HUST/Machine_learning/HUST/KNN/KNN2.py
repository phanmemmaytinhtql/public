from Distance import *
import numpy as np
import pandas as pd
from pandas.api.types import is_numeric_dtype
import copy


class KNeighbors:
    def __init__(self, k):
        self.k = 3
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
        self.features = features            # lít of feature specified by user
        self.preprocess(self.df)            # clean, encode, normalize data before
        self.X = self.df[features]          # spliting dataframe into X train
        self.Y = self.df[target]            # and Y train
        self.attr_weight = [1]*len(features) if attr_weight is None else attr_weight

    def predict(self, dataset):
        dataset = copy.deepcopy(dataset)
        self.preprocess(dataset)

        dataset.insert(len(dataset.columns), "KNN_predicted", 0)
        for row1 in dataset.index:
            for row2 in self.df.index:
                self.df.at[row2, "KNN_distance"] = euclid_distance(self.df[row2][:-1], dataset[row1][:-1])


    def preprocess(self, dataset):          # completed

        # clean missing values
        self.clean_data(dataset)

        # encode non-numeric values to numeric
        self.encode(dataset)

        # normalize features
        self.normalize(dataset)

    def clean_data(self, dataset):          # completed
        dataset.dropna(inplace=True)

    def encode(self, dataset):              # completed
        if self.look_up is None:        # if we are encoding training set
            self.look_up = dict()       # initialize lookup table as empty
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

    def normalize(self, dataset):           # completed
        if self.max is None:                # if we are normalizing the training set
            self.max = dataset.max()        # find max value for each columns
            self.min = dataset.min()        # find min value for each columns
        for index in dataset.index:             # for each row in dataset
            for col_name in dataset:            # for each feature in the instance
                dataset.at[index, col_name] = dataset.at[index, col_name]/(self.max[col_name] - self.min[col_name])
        # Problem: the last for loop should be improved?



    def training_set(self):
        print("Training instance features:")
        print(self.X.head(10))
        print('Training instance target:')
        print(self.Y.head(10))


dataset = [[2.7810836, 2.550537003, 0],
           [1.465489372, 2.362125076, 0],
           [3.396561688, 4.400293529, 0],
           [1.38807019, 1.850220317, 0],
           [3.06407232, 3.005305973, 0],
           [7.627531214, 2.759262235, 1],
           [5.332441248, 2.088626775, 1],
           [6.922596716, 1.77106367, 1],
           [8.675418651, -0.242068655, 1],
           [7.673756466, 3.508563011, 1]]

# df = pd.read_csv("iris.csv")
# features = ['sepal_length', 'sepal_width', 'petal_length', 'petal_width']
# target = 'iris_class'
df = pd.read_csv("healthcare-dataset-stroke-data.csv", index_col='id')
features = ['gender','age','hypertension','heart_disease','ever_married','work_type','Residence_type','avg_glucose_level','bmi','smoking_status']
target = 'stroke'


model = KNeighbors(3)
model.fit(df, features, target)
# model.training_set()
# print(model.predict(df[['gender','age','hypertension','heart_disease','ever_married','work_type','Residence_type','avg_glucose_level','bmi','smoking_status']].head(5)))
