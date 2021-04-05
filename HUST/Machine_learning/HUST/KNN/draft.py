from random import randrange

from KNN import *
from sklearn.model_selection import train_test_split
from Metrics import *


# df = pd.read_csv("Datasets/healthcare-dataset-stroke-data.csv", index_col="id")
# features = ['gender','age','hypertension','heart_disease','ever_married','work_type','Residence_type','avg_glucose_level','bmi','smoking_status']
# target = 'stroke'
# print(df[target].tail(18))

df = pd.read_csv("Datasets/iris.csv")
features = ['A', 'B', 'C', 'D']
target = 'Type'

# df = pd.read_csv("Datasets/melb_data.csv")
# features = ['Rooms', 'Bathroom', 'Landsize', 'Lattitude', 'Longtitude']
# target = "Price"

train_set, test_set = train_test_split(df, random_state = 1)

model = KNeighborsClassifier(5)
model.fit(train_set, features, target)
y_pred = model.predict(test_set[features])
y_true = test_set[target].replace(model._look_up)
print(accuracy_score(y_true, y_pred))
print(y_true)
print(y_pred)







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