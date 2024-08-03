#/bin/bash
# is par or impar
echo "Enter a number: "
read n
if [ $(( n %2 ))==0 ] #[expression] indentation 2 spaces in 
then
    echo "number is even"
else
    echo "number is odd"
fi 