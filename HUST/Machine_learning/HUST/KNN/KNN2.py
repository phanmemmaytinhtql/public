from Distance import *
import numpy as np
import pandas as pd
import copy


class KNeighbors:
    def __init__(self, k):
        self.k = 3
        self.X = None
        self.Y = None

    def fit(self, X, Y):
        """Save data and fit hyper-parameters.

        dataframe/numpy/nested list:param X_train:
        dataframe/numpy/list:param y_train:
        none:return:
        """
        self.X = copy.deepcopy(X)      # assume X is dataframe
        self.Y = copy.deepcopy(Y)      # assume Y is dataframe
        self.preprocess()

    def preprocess(self):

        # clean missing values
        self.clean_data()

        # label encode and to numeric
        # self.encode()

    def clean_data(self):
        self.X = self.X.dropna()
        # Problem: how to drop with y as well?

    def encode(self):
        for j in range(len(self.X[0])):
            col_type = type(eval(self.X[0, j]))

        # print("After encoding:")
        # print(self.X[:5])

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

df = pd.read_csv("iris.csv")
features = ['sepal_length', 'sepal_width', 'petal_length', 'petal_width']
X = df[features]
Y = df.iris_class

model = KNeighbors(3)
model.fit(X, Y)
