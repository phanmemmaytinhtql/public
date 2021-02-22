import numpy as np

y = lambda x: ((x[0] + x[1] - 0.5)**2 + (x[0] + 2*x[1] - 1)**2 + (x[0] + 4*x[1] - 2)**2 + (x[0] + 0*x[1] - 0)**2)/8
dy = lambda x: np.array([x[0] + 1.75*x[1] - 0.875,
                         1.75*x[0] + 21*x[1]/4 - 2.625])/8


class GradientDescent:

    def __init__(self, y, dy):
        self.x = None
        self.y = y
        self.dy = dy

    def descent_direction(self):
        return -self.dy(self.x)

    def learning_rate(self):
        return 0.1

    def terminal_condition(self):
        return np.linalg.norm(self.dy(self.x)) < 1e-9

    def move(self):
        d = self.descent_direction()
        alpha = self.learning_rate()
        self.x += alpha*d

    def solve(self, starting_point):
        self.x = np.array([[i] for i in starting_point], dtype=float)
        while not self.terminal_condition():
            self.move()

    def solution(self):
        return self.x

    def objective_value(self):
        return self.y(self.x)


class NormalEquation:
    pass


solver = GradientDescent(y, dy)
solver.solve([0, 0])
print(solver.solution())