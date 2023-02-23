combinations = []
res = []
def generate_par(left:int, right:int, range_:int) -> None:
    """Generates

    Parameters:
        left (int): left counter
        right (int): right counter
        string (str): string to be printed

    Returns:
        None
    """


    if left == right == range_:
        combinations.append("".join(res))
        return
    if left < range_:
        res.append("(")
        generate_par(left+1,right,range_)
        res.pop()

    if left > right:
        res.append(")")
        generate_par(left,right+1,range_)
        res.pop()
        


range_ = int(input("Enter the the number of parenthesis : ").strip())
generate_par(0,0,range_)
print(combinations)
