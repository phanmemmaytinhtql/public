import numpy as np
from numpy.linalg import inv
import pandas as pd
import matplotlib.pyplot as plt

from _base import *

# PROBLEM: Regularization
class LinearModelBase(ModelBase):

    def __init__(self, grad_step=None):
        super().__init__()
        self.theta = None
        self.alpha = grad_step

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

    @abstractmethod
    def H(self, X):
        pass

    @abstractmethod
    def J(self):
        pass

    def minimize_J(self):
        if self.alpha is None:
            self.theta = self.by_norm_eq()
        else:
            self.theta = self.by_grad_desc()

    def by_grad_desc(self):
        cost_hist = []
        X = self.X.to_numpy()
        Y = self.Y.to_numpy()
        m = len(self.X)
        while len(cost_hist) < 20 or abs(cost_hist[-1] - cost_hist[-20]) > 5e-2:
            cost_hist.append(self.J())
            H = self.H(self.X)
            # print("> COMPUTING theta BY GRAD DESC")
            self.theta = self.theta - self.alpha/m * X.T @ (H - Y)
            # print("> THEN theta =", self.theta)
            # print("> AND DIFF COST =", cost_hist[-1] - cost_hist[max(-20, -len(cost_hist))])
        # PROBLEM: HOW TO SELECT SUITABLE ALPHA AUTOMATICALLY

        plt.plot(list(range(len(cost_hist))), cost_hist)
        plt.show()
        print("> COMPUTING theta AFTER", len(cost_hist), "ITERATIONS")

        return self.theta

    def by_norm_eq(self):
        # print("> OPTIMIZING theta VIA NORM EQ:")
        X = self.X.to_numpy()
        Y = self.Y.to_numpy()
        return inv(X.T @ X) @ X.T @ Y


class LinearRegression(LinearModelBase, RegressionModel):

    def H(self, X):
        X = X.to_numpy()
        return X @ self.theta

    def J(self):
        H = self.H(self.X)
        Y = self.Y.to_numpy()
        m = len(self.X)
        return 1/(2*m) * (H - Y).T @ (H - Y)

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


class LogisticRegression(LinearModelBase, ClassificationBase):

    def __init__(self, grad_step):
        super().__init__(grad_step)

    def H(self, X):
        X = X.to_numpy()
        return 1/(1 + np.exp(-X @ self.theta))

    def J(self):
        H = self.H(self.X)
        Y = self.Y.to_numpy()
        m = len(self.X)
        return 1/m * (- Y.T @ np.log2(H) - (1 - Y).T @ np.log2(1 - H))

    def predict(self, dataset):
        if len(self.classes) > 2:
            raise ValueError("Not support multiclass classification yet")

        # print("PREDICTION STAGE:")
        # print("> INPUT:\n", dataset.columns)
        dataset = copy.deepcopy(dataset)
        dataset.insert(0, "Bias", 1)
        self._preprocess(dataset)
        # print("> AFTER PROCESS: dataset becomes:\n", dataset.columns)
        # print("> theta FOR COMPUTING H:\n", self.theta)

        H = self.H(dataset)
        prediction = pd.Series(index=dataset.index, dtype=int)
        for row in range(len(dataset)):
            prediction.iat[row] = 1 if H[row] >= 0.5 else 0;

        prediction.replace({self._look_up[c]: c for c in self.classes if c in self._look_up}, inplace=True)
        return prediction


