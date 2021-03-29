def euclid_distance(row1, row2):
    return geometry(row1, row2)


def manhattan_distance(row1, row2):
    return geometry(row1, row2, p=1)


def chebyshev_distance(row1, row2):
    return max(abs(row1[i] - row2[i]) for i in range(len(row1)))


def geometry(row1, row2, p=2):
    """Compute geometry distance between two instance. Default Euclid distance."""
    return (sum(abs((row1[i] - row2[i])) ** p for i in range(len(row1)))) ** (1 / p)


def hamming_distance(row1, row2):
    """Compute Hamming distance between two instances.

    Raise Error if any of the two instances is not binary."""
    for i in range(len(row1)):
        if row1[i] not in (0, 1) or row2[i] not in (0, 1):
            raise ValueError("Value of parameter is not binary")
    return sum(abs(row1[i] - row2[i]) for i in range(len(row1)))


def cosine_similarity(row1, row2):
    """Compute the cosine similarity between two instances."""
    cross_product = sum(row1[i] * row2[i] for i in range(len(row1)))
    length1 = geometry(row1, [0, 0, 0])
    length2 = geometry(row2, [0, 0, 0])
    return cross_product / (length1 * length2)
