import pandas as pd

from neighbors.Distance import *
from _base import *


class KNeighbors(ModelBase):
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


class KNeighborsClassifier(KNeighbors, ClassificationBase):

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
            print(row, prediction.at[row])

        prediction.replace({self._look_up[c]:c for c in self.classes}, inplace=True)

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
            print(row, '\t', prediction.at[row])
            # print([self.Y[nei_row] for nei_row, dist, weight in neighbors])
