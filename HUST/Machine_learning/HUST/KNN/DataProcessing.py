from csv import reader

import numpy as np
from matplotlib import pyplot


def load_csv(filename):
    """Transform data from csv file into python nested list."""
    dataset = list()
    with open(filename, 'r') as file:
        csv_reader = reader(file)
        for row in csv_reader:
            if not row:
                continue
            dataset.append(row)
    return dataset


def str_column_to_float(dataset, column):
    """Convert string columns into float."""
    for row in dataset:
        row[column] = float(row[column].strip())


def str_column_to_int(dataset, column):
    """Convert string values into integer label 0 through n - 1 (n: number of class) and return a lookup table."""
    class_values = [row[column] for row in dataset]
    unique = set(class_values)
    lookup = dict()
    for i, value in enumerate(unique):
        lookup[value] = i
    for row in dataset:
        row[column] = lookup[row[column]]
    return lookup


def dataset_minmax(dataset):
    """Find min and max value for each columns in the dataset."""
    minmax = list()
    for i in range(len(dataset[0])):
        col_values = [row[i] for row in dataset]
        value_min = min(col_values)
        value_max = max(col_values)
        minmax.append([value_min, value_max])
    return minmax


def normalize_dataset(dataset, minmax):
    """Rescale dataset columns to the range 0-1."""
    for row in dataset:
        for i in range(len(row)):
            row[i] = (row[i] - minmax[i][0]) / (minmax[i][1] - minmax[i][0])

# load csv file in to nested list
dataset = load_csv("iris.csv")

# convert numeric-string values into float
for col_index in range(len(dataset[0]) - 1):
    str_column_to_float(dataset, col_index)

# convert non-numeric-string values into int
str_column_to_int(dataset, len(dataset[0]) - 1)

# feature scaling
minmax = dataset_minmax(dataset)
normalize_dataset(dataset, minmax)

data_np = np.array(dataset)
pyplot.scatter(data_np[:, 0], data_np[:, 1], c=data_np[:, 4])
pyplot.show()

print(data_np)
