from Distance import *

def nearest_neighbors(X, z, K, type='Euclid'):
    """Return a list of indexes K nearest neighbors of z associated with specified distance function."""
    dstns_list = [(distance(z, X[j], type), j) for j in range(len(X))]
    dstns_list.sort()
    return [dstns_list[j][1] for j in range(K)]
