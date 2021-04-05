def mean_absolute_error(y_true, y_pred):
    return sum(abs(y_true[row] - y_pred[row]) for row in y_pred.index) / len(y_true)


def mean_square_error(y_true, y_pred):
    return sum((y_true[row] - y_pred[row])**2 for row in y_pred.index) / len(y_true)


def accuracy_score(y_true, y_pred):
    correct_num = 0
    for row in y_pred.index:
        if y_true[row] == y_pred[row]:
            correct_num += 1
    return correct_num/len(y_true)

# Confusion matrix, F1 measure