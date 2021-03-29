from Distance import *
import numpy as np


class KNeighbors:
    def __init__(self, k):
        self.k = 3
        self.X_train = None
        self.y_train = None

    def fit(self, X_train, y_train):
        """Save data and fit hyper-parameters.

        dataframe/numpy/nested list:param X_train:
        dataframe/numpy/list:param y_train:
        none:return:
        """
        self.X_train = X_train      # IMPLEMENT deepcopy here
        self.y_train = y_train
        self.preprocess()

    def preprocess(self):

        # clean missing values
        self.clean_data()


    def clean_data(self):
        for i in range(len(self.X_train)):
            if None in self.X_train[i] or None == self.y_train[i] \
                    or np.nan in self.X_train[i] or np.nan == self.y_train[i]:
                print(i)


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

# Separate dataset into training and testing domain.
X_train = []
y_train = []
for *x, y in dataset:
    X_train.append(x)
    y_train.append(y)
model = KNeighbors(3)
model.fit(X_train, y_train)
model.clean_data()