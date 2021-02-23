% The ; denotes a new row
A = [1 2 3; 4 5 6; 7 8 4]
B = [1 4 3; 5 2 3; 1 4 4]

% This is a vector
v = [1; 2; 3]

[m, n] = size(A) % returns a row matrix
size(A, 1) % return the 1st element of size i.e #row
size(A, 2) %            2nd                     #col

length(A) % return the size of the longest dimension

% get 2nd row 3rd column of a matric
a_23 = A(2, 3)

A(2:3, 1:2)
A([1, 3], :) % get row 1 and 3, all the columns
% USE THESE FOR ASSIGNMENT AS WELL

[A [10; 11; 12]] % add another column to the right
% USE THIS TO CONCATENATING 2 matrix as well
[A; B] % to the bottom

A(:) % put all elements of A in a single vector

% scalar multiplication
5*A
A/2

% add matrix with scalar
A + 5

% multiply matrices
A * v

A .* B % multiply element-wise
A .^ 2
1 ./ A
log(A) % element-wise as well
exp(A) % ....................
abs(A) % ....................
A < 3  % ....................

% a 2 by 2 identity matrix
I = eye(2)

% transpose
A'

% inverse
pinv(A)
inv(A)
% pinv() compute inverse of (X'*X) even when it is non-invertible

val = max(A) % return the maximum value of each COLUMN A
[val, ind] = max(A) % return the index as well
max(A, B) % take elemen-wise maximum
max(A, [], 1) % take column-wise maximum
max(A, [], 2) % take row-wise maximum
max(max(A)) % return overall maximum

1 && 0 % AND
1 || 0 % OR
xor(1, 0) % XOR

1 ~= 2

2^6 == 64

a = pi; % semicolon supression output

disp(a); % display a even with semicolon

disp(sprintf('2 decimals: %0.2f', a)) % print string with C-style

format long
format short

v = 1:0.25:2 % row matrix 1 through 2 with step 0.25

ones(2, 3) % 2 by 3 matrix of all 1

zeros(1, 3)

rand(1, 3) % 1 by 3 matrix of all random numbers between 0 and 1

randn(1, 3) % 1 by 3 matrix of random numbers in Gaussian distribution with mean 0 and standard deviation 1

w = -6 + sqrt(10)*randn(1, 10000);
hist(A, 50) % histogram of A with 50 bins

pwd % return the current path

load('newfile.py') % load file (maybe in form of matrix)

who % show variables in the workspace
whos % gives more details
clear variables_name % remove a variable from the current scope, clear all if no parameters

save newfile.py A % save A to a file
save newfile.py A -ascii % save in human-readable instead of binary in case A is too large

find(v < 2)
[r, c] = find(A < 3) % return indexes

magic(4) % create a matrix with rows, columns, diagonals sums up to same thing

sum(v)
sum(A, 1) % column-wise sum
sum(A, 2) % row-wise sum
prod(v)
floor(v)
ceil(v)

flipud(A)

t = [0:0.01:0.98]
y = sin(t)
z = cos(t)
plot(t, y)
hold on;
plot(t, z, 'r')
xlable('time')
ylabel('value')
legend('sin', 'cos')
title('My plot')
print -dpng 'my_plot.png'
close
figure(1); plot(t, y)
figure(2), plot(t, z)
subplot(1, 2, 1) % divide plot a 1 by 2 grid, access the 1st element
plot(t, y)
subplot(1, 2, 2) % ......
plot(t, z)
axis([-3 3 -2 2])
clf
imagesc(A)
imagesc(A), colorbar, colormap gray;

% NOTE that octave indexes from 1, not 0.
v = magic(3)(:)
for i = 1:10,
    v(i) = 2^i;
    end;

i = 1
while true,
    v(i) = 100;
    if i == 1,
        disp('Starting');
    elseif i == 2,
        disp('OK');
    else
        break;
        end;
    i = i + 1;
    end;


addpath('/media/tran/19EC-1803/Working_space/public/HUST/Machine_learning/coursera') % add address to octave search path

PS1('>> ')