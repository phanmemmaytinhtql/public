import numpy as np
from numpy.linalg import inv
import pandas as pd


from _base import *


class LinearModelBase(ModelBase):

    def __init__(self):
        super().__init__()
        self.theta = None

    def fit(self, dataset, features, target, attr_weight=None):
        dataset.insert(0, "Bias", 1)
        super().fit(dataset, features, target, attr_weight)
        self.features.append("Bias")
        self.theta = np.ones(len(self.features))        # include bias unit
        self.minimize_J()

    def _preprocess(self, dataset):
        super()._preprocess(dataset)
        # print("Line 24\n", dataset.head(2))

    def _normalize(self, dataset):
        """Normalize values in each columns (except target) to range [0, 1]."""
        if self.max is None:                # if we are normalizing the training set
            self.max, self.min = dataset.max(), dataset.min()        # find max, min value for each columns
        for row in dataset.index:           # for each row in dataset
            for col in self.features:           # for each feature in the instance (exclude target)
                if col != "Bias":
                    dataset.at[row, col] = (dataset.at[row, col] - self.min[col]) / (self.max[col] - self.min[col])

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
        self.theta = self.by_norm_eq()

    def by_grad_desc(self, alpha):
        pass

    def by_norm_eq(self):
        # print("Line 54\n", self.X.head(2))
        X = self.X.to_numpy()
        Y = self.Y.to_numpy()
        return inv(X.T @ X) @ X.T @ Y

    def predict(self, dataset):
        dataset = copy.deepcopy(dataset)
        self._preprocess(dataset)
        # print("Line 62\n", dataset.head(2))
        H = self.H(dataset)
        prediction = prediction = pd.Series(index=dataset.index, dtype=int)
        for row in range(len(dataset)):
            prediction.iat[row] = H[row]
        return prediction



