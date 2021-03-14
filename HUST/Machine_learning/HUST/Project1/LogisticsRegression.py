from typing import List

import pandas as pd
import numpy as np
from sklearn.tree import DecisionTreeRegressor
from sklearn.metrics import mean_absolute_error
from sklearn.model_selection import train_test_split


stroke_data = pd.read_csv('healthcare-dataset-stroke-data.csv')


y = stroke_data.stroke
stroke_features = ['age', 'hypertension', 'heart_disease', 'avg_glucose_level', 'bmi']  # 'gender', 'ever_married', 'work_type', 'Residence_type', , 'smoking_status'
X = stroke_data[stroke_features]

print(len(X) - len(y))

X = X.replace(np.nan, -1, regex=True)
X_train, X_val, y_train, y_val = train_test_split(X, y, random_state=1)

# print(X.isnull().sum())
# print(X.head())
# print(X.describe())


stroke_model = DecisionTreeRegressor(random_state=1)
stroke_model.fit(X_train, y_train)

y_prediction = stroke_model.predict(X_val)

print(mean_absolute_error(y_val, y_prediction))






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
