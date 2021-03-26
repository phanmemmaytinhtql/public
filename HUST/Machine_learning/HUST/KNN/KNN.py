import math
from Distance import *

class NearestNeighbor:
    def __init__(self, X_train, y_train):
        self.X_train = None
        self.y_train = None
        self.NB = []



    def predict(self, z, k):
        raise NotImplementedError

    def _analyze_neighbor(self, z, type='Euclid'):
        """Compute distances from new instance z to each training instance and their corresponding weight and sort.

        [[distance][distance_weight][index in D_train]]
        """
        for j in range(len(self.X_train)):
            d = compute_distance(z, self.X_train[j], type)
            v = self._compute_distance_weight(d)
            self.NB.append([d, v, j])       # j represent index of the training instance in D_train, to keep track
        self.NB.sort()

    def get_neighbor(self):
        return self.NB

    def _compute_distance_weight(self, d, alpha=1, type=1):
        """Return distance weight associated with the considering distance."""
        if type == 1:
            return 1 / (alpha + d)
        elif type == 2:
            return 1 / (alpha + d * d)
        else:
            return math.exp(- d * d / (alpha * alpha))

class NearestNeighborRegression(NearestNeighbor):
     def predict(self, z, k):
         self._analyze_neighbor(z)
         return sum(self.NB[i][1] * self.y[self.NB[i][2]] for i in range(k)) / \
                sum(self.NB[i][1] for i in range(k))

class NearestNeighborClassification(NearestNeighbor):
    def predict(self, z, k):
        self._analyze_neighbor(z)
        class_ranking = [[0, i] for i in range(len(set(self.y_train)))]
        for i in range(k):
            class_ranking[self.y_train[self.NB[i][2]]][0] += self.NB[i][1]
        return max(class_ranking)[1]

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

X_train = []
y_train = []
for *x, y in dataset:
    X_train.append(x)
    y_train.append(y)

solver = NearestNeighborClassification(X_train, y_train)
print(solver.predict(X_train[0], 3), y_train[0])
print(solver.get_neighbor())