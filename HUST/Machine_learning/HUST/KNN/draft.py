from Distance import *
from Neighbor import *
import math

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

X = []
for *x, y in dataset:
    X.append(x)

print(nearest_neighbors(X, X[0], 5))


class NearestNeighbor:
    def __init__(self, dataset, K=None, type="Classification"):
        self.X = []
        self.y = []
        for *x, y in dataset:
            X.append(x)
            y.append(y)
        self.K = K
        self.type = type

    def predict(self, z):
		pass

    def nearest_neighbors(self, z, type='Euclid'):
        """Return a list of indexes K nearest neighbors of z associated with specified distance function."""
        dstns_list = [(distance(z, self.X[j], type), j) for j in range(len(self.X))]
        dstns_list.sort()
        return [dstns_list[j][1] for j in range(self.K)]

    def distance(self, row1, row2, type='Euclid'):
        """Compute distance between two instance. Default Euclid distance.

        type is one of value ['Manhattan', 'Chebyshev', 'Euclid', 'Hamming', 'Cosine'].
        """
        if type == 'Manhattan':
            return self._geometry(row1, row2, 1)
        elif type == 'Chebyshev':
            return max(abs(row1[i] - row2[i]) for i in range(len(row1)))
        elif type == 'Hamming':
            return self._hamming(row1, row2)
        elif type == 'Cosine':
            return self._cosine_similarity(row1, row2)
        else:
            return self._geometry(row1, row2)

    def distance_weight(self, d, alpha=1, type=1):
        """Return distance weight associated with the considering distance."""
        if type == 1:
            return 1 / (alpha + d)
        elif type == 2:
            return 1 / (alpha + d * d)
        else:
            return math.exp(- d * d / (alpha * alpha))

    def _geometry(self, row1, row2, p=2):
        """Compute geometry distance between two instance. Default Euclid distance."""
        return (sum(abs((row1[i] - row2[i])) ** p for i in range(len(row1)))) ** (1 / p)

    def _hamming(self, row1, row2):
        """Compute Hamming distance between two instances.

        Raise Error if any of the two instances is not binary."""
        for i in range(len(row1)):
            if row1[i] not in (0, 1) or row2[i] not in (0, 1):
                raise ValueError("Value of parameter is not binary")
        return sum(abs(row1[i] - row2[i]) for i in range(len(row1)))

    def _cosine_similarity(self, row1, row2):
        """Compute the cosine similarity between two instances."""
        cross_product = sum(row1[i] * row2[i] for i in range(len(row1)))
        length1 = geometry(row1, [0, 0, 0])
        length2 = geometry(row2, [0, 0, 0])
        return cross_product / (length1 * length2)
