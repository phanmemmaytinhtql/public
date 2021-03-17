
import pandas as pd
import numpy as np
from sklearn.tree import DecisionTreeRegressor
from sklearn.metrics import mean_absolute_error
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt

stroke_data = pd.read_csv('healthcare-dataset-stroke-data.csv')

stroke_features = ['id', 'gender', 'age', 'hypertension', 'heart_disease', 'ever_married',
                   'work_type', 'Residence_type', 'avg_glucose_level', 'bmi', 'smoking_status']
X_df = stroke_data[stroke_features]
y_df = stroke_data.stroke


# fruit_data = pd.read_csv('apples_and_oranges.csv')
# fruit_feature = ['Weight', 'Size']
# X_df = fruit_data[fruit_feature]
# y_df = fruit_data.Class
#
# X_df = X_df.replace(np.nan, 0, regex=True)
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
        self.lamda = 1000

    def dataset(self, X, y):
        """X, y are panda dataframes"""

        # convert X, y to numpy numerical values
        if not isinstance(X, np.ndarray):
            X = X.to_numpy(np.float64)
            y = y.to_numpy(np.float64)

        self.n = len(X[0])
        self.m = len(y)
        self.X = np.hstack((np.ones((self.m, 1)), X))       # add bias unit
        self.y = y.reshape(self.m, 1)
        self.theta = np.zeros(self.n + 1).reshape(self.n + 1, 1)          # add bias unit
        print(self.y)
        
    def _df_to_numeric(self, df):
        pass

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
        return 1/self.m * (-self.y.T @ log_vec(H) - (1 - self.y).T @ log_vec(1 - H)) +  \
               self.lamda/(2*self.m) * self.theta.T @ self.theta

    def compute_derivative(self):
        H = self.predict(self.X)
        return 1/self.m * self.X.T @ (H - self.y) + \
               self.lamda/self.m * self.theta

    def gradient_descent(self, num_iter=200):
        alpha = 0.005
        k = 0
        while k < num_iter:
            k += 1
            self.theta = self.theta + alpha * (- self.compute_derivative())
            self.iters.append(k)
            self.cost_history.append(self.compute_cost()[0])
        self.plot_cost_numiter()
        self.plot_compare()
        H = self.predict(self.X)
        print(H)

    def plot_cost_numiter(self):
        plt.plot(self.iters, self.cost_history)
        plt.show()

    def plot_compare(self):
        x = [i for i in range(5110)]
        y_v = [i[0] for i in self.y]
        y_pre = [0 if i[0] < 0.5 else 1 for i in self.predict(self.X)]
        # plt.plot(x, y_v)
        # plt.show()
        plt.style.use('seaborn-whitegrid')
        plt.plot(y_pre)
        plt.show()

    def test(self):
        print(self.X.dtype)



model = LogisticsRegressor()
# model.dataset(X_df, y_df)
# model.gradient_descent()
# model.test()
print(X_df.dtypes)
print(X_df.convert_dtypes().dtypes)







# print(X_df.isnull().sum())
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
