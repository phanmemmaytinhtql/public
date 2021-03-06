function J = cost_func(X, y, theta)

m = size(X, 1);
prediction = X*theta;
sqrError = (prediction - y) .^2;

J = 1/(2*m) * sum(sqrError);