from random import randrange
from sklearn.model_selection import train_test_split, KFold
from metrics.metrics import *
from neighbors.kneighbors import *
from linear_model.linear_model import *


# df = pd.read_csv("datasets/healthcare-dataset-stroke-data.csv", index_col="id")
# features = ['gender','age','hypertension','heart_disease','ever_married','work_type','Residence_type','avg_glucose_level','bmi','smoking_status']
# target = 'stroke'
# theta = [-0.09091942 -0.0188816   0.19456024  0.04605918  0.05421833  0.03504612
#   0.03727865 -0.00307349  0.05013373 -0.0322395   0.00370181]

#
# df = pd.read_csv("datasets/iris.csv")
# features = ['A', 'B', 'C', 'D']
# target = 'Type'
# theta = [  2.74452555   6.29489051  -1.19124088 -11.24087591   4.39270073]

df = pd.read_csv("datasets/melb_data.csv")
features = ['Rooms', 'Bathroom', 'Landsize', 'Lattitude', 'Longtitude']
target = "Price"

# Split dataset into train_set and test_set
train_set, test_set = train_test_split(df, random_state = 1)

# def get_as(nei_num, train_set, features, target):
#     kf = KFold(5)
#     accuracy_sum = 0
#     for train_index, val_index in kf.split(train_set):
#         print(train_set[train_index])
#         model = KNeighborsClassifier(nei_num)
#         model.fit(train_set[train_index], features, target)
#         y_true = train_set[val_index, target].replace(model._look_up)
#         y_pred = model.predict(train_set[val_index, features])
#         accuracy_sum += accuracy_score(y_true, y_pred)
#     return accuracy_sum/5

# ass = {nei_num: get_as(nei_num, train_set, features, target) for nei_num in np.arange(3, 21, 2)}
#
# best_k = max(ass, key=ass.get)


y_true = test_set[target]
print("Y_TRUE =\n", y_true)

print("PREDICTING WITH LINEAR REGRESSION MODEL")
model = LinearModelBase()
print("> WITH theta =", model.theta)

# print("PREDICTING WITH KNN MODEL")
# model = KNeighborsRegressor(5)

model.fit(train_set, features, target)
y_pred = model.predict(test_set[features].head(10))
print("Y_PRED =\n", y_pred)
print(mean_absolute_error(y_true, y_pred))














# READ LATER
# Split a dataset into k folds
def cross_validation_split(dataset, n_folds):
    dataset_split = list()
    dataset_copy = list(dataset)
    fold_size = int(len(dataset) / n_folds)
    for _ in range(n_folds):
        fold = list()
        while len(fold) < fold_size:
            index = randrange(len(dataset_copy))
            fold.append(dataset_copy.pop(index))
        dataset_split.append(fold)
    return dataset_split


# Calculate accuracy percentage
def accuracy_metric(actual, predicted):
    correct = 0
    for i in range(len(actual)):
        if actual[i] == predicted[i]:
            correct += 1
    return correct / float(len(actual)) * 100.0


# Evaluate an algorithm using a cross validation split
def evaluate_algorithm(dataset, algorithm, n_folds, *args):
    folds = cross_validation_split(dataset, n_folds)
    scores = list()
    for fold in folds:
        train_set = list(folds)
        train_set.remove(fold)
        train_set = sum(train_set, [])
        test_set = list()
        for row in fold:
            row_copy = list(row)
            test_set.append(row_copy)
            row_copy[-1] = None
        predicted = algorithm(train_set, test_set, *args)
        actual = [row[-1] for row in fold]
        accuracy = accuracy_metric(actual, predicted)
        scores.append(accuracy)
    return scores