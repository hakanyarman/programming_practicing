
def onlyGreetPersonWhoHasNameThatStartsWithB():
    name = input("What's your name")    
    firstLetter = name[0]
    firstLetterCapitalize = firstLetter.upper()
    print (f"hello {name}" if (firstLetterCapitalize=="B") else "go way")

onlyGreetPersonWhoHasNameThatStartsWithB()