import copy
from pandas.api.types import is_numeric_dtype


class ModelBase:

    def __init__(self):
        """

        self.df                         # pandas dataframe store both features and target data
        self.X                          # pandas dataframe store features
        self.Y                          # pandas dataframe store target data
        self.features                   # list store list of features
        self.max                        # pandas dataframe store max value of each column
        self._look_up                   # dictionary store encode info of non-numeric value
        self.attr_weight                # array-like store attribute weights
        """
        self.X = None
        self.Y = None
        self.features = None
        self.max = self.min = None
        self._look_up = None
        self.attr_weight = None

    def fit(self, dataset, features, target, attr_weight=None):
        """Store dataset and preprocess.

        :param dataset: pandas dataframe store both features and target data
        :param features: list store list of features specified by user
        :param target:  column name of target specified by user
        :param attr_weight: array-like store attribute weights specified by user

        :return:
        """
        col_names = features + [target]
        dataset = copy.deepcopy(dataset[col_names])
        self.features = features
        self.attr_weight = [1] * len(features) if attr_weight is None else attr_weight

        self._preprocess(dataset)

        self.X = dataset[features]
        self.Y = dataset[target]

    def predict(self, dataset):
        raise NotImplementedError
        # Problem: Must be re-implemented by subclass -> research Metaclass

    def _preprocess(self, dataset):
        """Preprocess data, including: clean missing values, transform to numeric values, normalize data."""
        self._clean_data(dataset)
        self._encode(dataset)
        self._normalize(dataset)

    def _clean_data(self, dataset):
        """Clean missing value in a pandas dataframe.

        Operation by drop rows with missing values.
        """
        dataset.dropna(inplace=True)
        # Problem: handle missing data (in a different way), noisy data, inconsistent data

    def _encode(self, dataset):
        """Transform ordinal and categorical value into numeric.

        Encoding info is stored in a look-up table.
        """
        if self._look_up is None:       # if we are encoding training set
            self._look_up = dict()      # initialize look-up table as empty
            for col in dataset:
                if not is_numeric_dtype(dataset[col]):             # for each column that is not numeric
                    for val, label in enumerate(dataset[col].unique()):   # attach a encode value for each of its label
                        self._look_up[label] = val                        # add that value to the lookup table

        dataset.replace(self._look_up, inplace=True)

    def _normalize(self, dataset):
        """Normalize values in each columns (except target) to range [0, 1]."""
        if self.max is None:                # if we are normalizing the training set
            self.max, self.min = dataset.max(), dataset.min()        # find max, min value for each columns
        for row in dataset.index:           # for each row in dataset
            for col in self.features:           # for each feature in the instance (exclude target)
                dataset.at[row, col] /= (self.max[col] - self.min[col])


class ClassificationBase(ModelBase):

    def __init__(self):
        super().__init__()
        self.classes = None

    def fit(self, dataset, features, target, attr_weight=None):
        super().fit(dataset, features, target, attr_weight)
        self.classes = self.Y.unique()