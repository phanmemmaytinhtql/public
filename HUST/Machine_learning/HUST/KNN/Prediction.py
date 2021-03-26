from Distance import *
from Neighbor import *
import math

def dstns_weight(d, alpha=1, type=1):
    """Return distance weight associated with the considering distance."""
    if type == 1:
        return 1/(alpha + d)
    elif type == 2:
        return 1/(alpha + d*d)
    else:
        return math.exp(- d*d/(alpha * alpha))

def predict(Dstns_list, z, )