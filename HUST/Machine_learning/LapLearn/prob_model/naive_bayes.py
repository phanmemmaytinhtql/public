

from _base import *

class NaiveBayes(ClassificationBase):

    # def fit(self, dataset, features, target, attr_weight=None):
    #     super().fit(dataset, features, target, attr_weight)


    def P(self, c):
        """Calculate the probability that class c occur in dataset."""
        return self.Y[self.Y == c] / len(self.Y)

    # def P(self, col, c):
    #     """Calculate prior estimation for P(col | c)."""
    #     if col in self._look_up:
    #         max_val = self.X[self.Y == c][col].max()
    #         min_val = self.X[self.Y == c][col].min()
    #         return 1/(max_val - min_val)/self.P(c)
    #     else:
    #         return 1/len(self.X[self.Y == c][col].unique())/self.P(c)

    def predict(self, dataset):
        pass