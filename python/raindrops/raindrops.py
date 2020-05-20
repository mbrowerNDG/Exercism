def convert(number):
    drops = ""
    if number % 3 == 0:
        drops = drops + "Pling"
    if number % 5 == 0:
        drops = drops + "Plang"
    if number % 7 == 0:
        drops = drops + "Plong"
    elif not drops:
        return str(number)
    return drops
