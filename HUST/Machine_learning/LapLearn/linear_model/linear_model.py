import numpy as np
from numpy.linalg import inv
import pandas as pd
import matplotlib.pyplot as plt

from _base import *


class LinearModelBase(ModelBase):

    def __init__(self):
        super().__init__()
        self.theta = None

    def fit(self, dataset, features, target, attr_weight=None):
        # print("TRAINING STAGE:")
        super().fit(dataset, features, target, attr_weight)
        self.X.insert(0, "Bias", 1)
        self.features.append("Bias")
        self.theta = np.ones(len(self.features))        # include bias unit
        # print("> AFTER PROCESS DATA AND ADD Bias:")
        # print("> theta BECOMES: ", self.theta)
        self.minimize_J()
        # print("> AFTER OPTIMIZING theta:")
        # print("> theta BECOMES: ", self.theta)


    def _normalize(self, dataset):
        """Normalize values in each columns (except target) to range [0, 1]."""
        if self.max is None:                # if we are normalizing the training set
            self.max, self.min = dataset.max(), dataset.min()        # find max, min value for each columns
        for row in dataset.index:           # for each row in dataset
            for col in self.features:           # for each feature in the instance (exclude target)
                dataset.at[row, col] = (dataset.at[row, col] - self.min[col]) / (self.max[col] - self.min[col]) if col != "Bias" else 1

    # @abstractmethod
    def H(self, X):
        # print(X.head(2))
        X = X.to_numpy()
        return X @ self.theta

    def J(self):
        H = self.H(self.X)
        Y = self.Y.to_numpy()
        m = len(self.X)
        return 1/(2*m) * (H - Y).T @ (H - Y)

    def minimize_J(self):
        self.theta = self.by_grad_desc(0.01)

    def by_grad_desc(self, alpha):
        cost_hist = []
        X = self.X.to_numpy()
        Y = self.Y.to_numpy()
        m = len(X)
        while len(cost_hist) < 20 or abs(cost_hist[-1] - cost_hist[-20]) > 1e-3:
            cost_hist.append(self.J())
            # print("> COMPUTING theta BY GRAD DESC")
            # print("> X =\n", X)
            # print("> Y =\n", Y)
            self.theta = self.theta - alpha/m * X.T @ (X @ self.theta - Y)
            print("> THEN theta =", self.theta)

        plt.plot(list(range(len(cost_hist))), cost_hist)
        plt.show()

        return self.theta





    def by_norm_eq(self):
        # print("> OPTIMIZING theta VIA NORM EQ:")
        # print("> TRAINING SET HAS COL: ", self.X.columns)
        X = self.X.to_numpy()
        Y = self.Y.to_numpy()
        return inv(X.T @ X) @ X.T @ Y


    def predict(self, dataset):
        # print("PREDICTION STAGE:")
        # print("> INPUT:\n", dataset.columns)
        dataset = copy.deepcopy(dataset)
        dataset.insert(0, "Bias", 1)
        self._preprocess(dataset)
        # print("> AFTER PROCESS: dataset becomes:\n", dataset.columns)
        # print("> theta FOR COMPUTING H:\n", self.theta)

        H = self.H(dataset)
        prediction = pd.Series(index=dataset.index, dtype=float)
        for row in range(len(dataset)):
            prediction.iat[row] = H[row]
        return prediction



