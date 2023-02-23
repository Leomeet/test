word_to_number = {'zero':0,'one': 1, 'two': 2, 'three': 3, 'four': 4,
                  'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9}
number_to_word = {0:'zero',1: 'one', 2: 'two', 3: 'three', 4: 'four',
                  5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'}
import datetime

def convert_word_to_number(x: int, y: int, number: str, string: str, miss_flag: int) -> int:
    """
    converts a string of numeric words into a number.

    Args:
        x (int): starting index numeric word
        y (int): ending index numeric word
        number (str): "" (func generated numeric value string) 
        string (str): Target String
        miss_flag (bool): False (for function use)

    Raises:
        ValueError: in event of invalid target string

    Returns:
        int: target integer
    """

    abc = len(string)
    if y <= len(string) and miss_flag <= 2: #checks for ending index out of bounds and miss counts while checking for valid key
        
        if string[x:y] in word_to_number.keys(): #finds the substring in the dictionary onetwo -> sub"one" ->
            number += str(word_to_number[string[x:y]]) #
            return convert_word_to_number(y, y+3, number, string, miss_flag=0)
        else:
            return convert_word_to_number(x, y+1, number, string, miss_flag+1)

    else:
        if miss_flag == 0 and string[x:y] == "":return int(number)
        else:raise ValueError("enter correct words")


def find_gcd(x: int, y: int) -> int:
    """
    finds the greatest common divisor of two numbers.
    Args:
        x (int): first number
        y (int): second number
    Returns:
        int: greatest common divisor
    """
    if y == 0:
        return x
    else:
        return find_gcd(y, x % y)


def convert_number_to_word(next: int, numeric_word: str, string: str) -> str:
    """
    converts a number into a string of words.

    Args:
        next (int): starting index numeric word
        numeric_word (str): "" (func generated numeric value string) 
        string (str): Target String of numbers

    Returns:
        str: word string of numeric value
    """

    if next < len(string):
        index = string[next]
        numeric_word += number_to_word[int(index)]
        res = convert_number_to_word(next+1, numeric_word, string)
        if res != "":
            return res
    else:
        return numeric_word


if __name__ == '__main__':


    gcd_num_1 = input("Enter number one: ").strip()
    gcd_num_2 = input("Enter number two: ").strip()

    a = datetime.datetime.now()
    input_one = convert_word_to_number(0, 3, '', gcd_num_1, 0)
    input_two = convert_word_to_number(0, 3, '', gcd_num_2, 0)

    output = find_gcd(input_one, input_two)

    output = convert_number_to_word(0, "", str(output))
    print(f"The GCD of {str(input_one)} & {str(input_two)} is {output}")
    b = datetime.datetime.now()
    print(b - a)
