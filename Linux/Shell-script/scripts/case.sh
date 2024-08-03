#/bin/bash
# ref https://github.com/jurandysoares/shell-script-wikipedia/blob/main/14-case.md
echo "Enter a number: "
read n
case "$n" in
    "2")
    echo "dois"
    ;;

    "3")
    echo "trez"
    ;;

    10)
    echo "dez"
    ;;

    11|12|13)
     echo "multiplos"
    ;;
    
    *)
    echo "Not registered"
    ;;
esac