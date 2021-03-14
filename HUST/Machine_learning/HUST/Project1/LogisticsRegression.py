import math

import pandas as pd
import numpy as np
from sklearn.tree import DecisionTreeRegressor
from sklearn.metrics import mean_absolute_error
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt

stroke_data = pd.read_csv('healthcare-dataset-stroke-data.csv')

stroke_features = ['age', 'hypertension', 'heart_disease', 'avg_glucose_level', 'bmi']  # 'gender', 'ever_married', 'work_type', 'Residence_type', , 'smoking_status'
X_df = stroke_data[stroke_features]
y_df = stroke_data.stroke

X_df = X_df.replace(np.nan, -1, regex=True)
X_train, X_val, y_train, y_val = train_test_split(X_df, y_df, random_state=1)

class LogisticsRegressor:
    def __init__(self):
        self.X = None
        self.y = None
        self.theta = None
        self.n = 0          # number of features, excluding bias unit
        self.m = 0
        self.iters = []
        self.cost_history = []

    def dataset(self, X, y):
        """X, y are panda dataframes"""
        if not isinstance(X, np.ndarray):
            X = X.to_numpy()
            y = y.to_numpy()
        self.n = len(X[0])
        self.m = len(y)
        self.X = np.hstack((np.ones((self.m, 1)), X))       # add bias unit
        self.y = y.reshape(self.m, 1)
        self.theta = np.random.rand(self.n + 1, 1)                        # add bias unit

    def predict(self, X):
        """
        Return row-wise value of dataset prediction.
        Note that each row (NOT column) of X represent a sample including all features."""
        if not isinstance(X, np.ndarray):
            X = X.to_numpy()
        if len(X[0]) != self.n + 1:
            X = np.hstack((np.ones((self.m, 1)), X))

        sigmoid = lambda z: 1/(1 + np.exp(-z))
        sigmoid_vec = np.vectorize(sigmoid)

        return sigmoid_vec(X @ self.theta)

    def compute_cost(self):
        log_vec = np.vectorize(np.log2)
        H = self.predict(self.X)
        return 1/self.m * (-self.y.T @ log_vec(H) - (1 - self.y).T @ log_vec(1 - H))

    def gradient_descent(self, num_iter=92):
        alpha = 0.005
        k = 0
        while k < num_iter:
            k += 1
            self.theta = self.theta - alpha/self.m * self.X.T @ (self.predict(self.X) - self.y)
            self.iters.append(k)
            self.cost_history.append(self.compute_cost()[0])
        self.plot()

    def plot(self):
        plt.plot(self.iters, self.cost_history)
        plt.show()


    def test(self):
        alpha = 0.01
        print("theta =", self.theta)
        # self.theta = self.theta - alpha / self.m * self.X.T @ (self.predict(self.X @ self.theta) - self.y)
        # print("cost =", self.compute_cost())
        print(self.predict(self.X @ self.theta) - self.y)
        # print("theta =", self.theta)

model = LogisticsRegressor()
model.dataset(X_df, y_df)
model.gradient_descent()
print(model.predict(X_df))
print(y_df)
# model.test()

# m = len(y_df)
# n = len(stroke_features)
# X = np.hstack((np.ones((m, 1)), X_df.to_numpy()))       # add bias unit
# y = y_df.to_numpy()
# print(len(X[1]))
# theta = np.random.rand(n + 1, 1)                        # add bias unit
# sample = lambda i: X.reshape(m, n + 1, 1)[i]
# sigmoid = lambda z: 1/(1 + np.exp(z))        # reduce one parameter of shape
# # - (theta.T @ sample(i)).reshape(1, ))
# # H = np.array(list(map(sigmoid, range(m))))
#
# sigmoid_vec = np.vectorize(sigmoid)
#
# print(sigmoid_vec(X @ theta))
#


# print(1 - H)






# print(X.isnull().sum())
# print(X.head())
# print(X.describe())

#
# stroke_model = DecisionTreeRegressor(random_state=1)
# stroke_model.fit(X_train, y_train)
#
# y_prediction = stroke_model.predict(X_val)
#
# print(mean_absolute_error(y_val, y_prediction))




# KAGGLE
#
# def get_mae(max_leaf_nodes, train_X, val_X, train_y, val_y):
#     model = DecisionTreeRegressor(max_leaf_nodes=max_leaf_nodes, random_state=0)
#     model.fit(train_X, train_y)
#     preds_val = model.predict(val_X)
#     mae = mean_absolute_error(val_y, preds_val)
#     return(mae)
#
# candidate_max_leaf_nodes = [5, 25, 50, 100, 250, 500]
#
# scores = {leaf_size: get_mae(leaf_size, train_X, val_X, train_y, val_y) for leaf_size in candidate_max_leaf_nodes}
#
# best_tree_size = min(scores, key=scores.get)
#
# final_model = DecisionTreeRegressor(max_leaf_nodes=best_tree_size, random_state=1)
#
# final_model.fit(X, y)
#
# print(mean_absolute_error(val_y, final_model.predict(val_X)))
#
#
# from sklearn.ensemble import RandomForestRegressor
#
# forest_model = RandomForestRegressor(random_state = 1)
#
# forest_model.fit(train_X, train_y)
#
# meld_preds = forest_model.predict(val_X)
#
# print(mean_absolute_error(val_y, meld_preds))
#
