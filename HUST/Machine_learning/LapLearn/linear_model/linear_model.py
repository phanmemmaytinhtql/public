import numpy as np
from numpy.linalg import inv
import pandas as pd


from _base import *


class LinearModelBase(ModelBase):

    def __init__(self):
        super().__init__()
        self.theta = None

    def fit(self, dataset, features, target, attr_weight=None):
        super().fit(dataset, features, target, attr_weight)
        self.X.insert(0, "Bias", 1)         # insert additional column for bias unit
        self.theta = np.ones(len(self.features) + 1)        # include bias unit
        self.minimize_J()

    # @abstractmethod
    def H(self, X):
        X = X.to_numpy()
        return X @ self.theta

    def J(self):
        H = self.H(self.X)
        Y = self.Y.to_numpy()
        m = len(self.X)
        return 1/(2*m) * (H - Y).T @ (H - Y)

    def minimize_J(self):
        self.theta = self.by_norm_eq()

    def by_grad_desc(self, alpha):
        pass

    def by_norm_eq(self):
        X = self.X.to_numpy()
        Y = self.Y.to_numpy()
        return inv(X.T @ X) @ X.T @ Y

    def predict(self, dataset):
        pass



