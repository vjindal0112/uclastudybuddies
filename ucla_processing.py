import json

with open("/Users/samforman/Desktop/StudyBuddies/classes.json") as f:
    list_of_classes = json.load(f)
    data = []
    for i in range(len(list_of_classes)):
        temp_string = ""
        class_string = list_of_classes[i]['nameandteacher']
        if " - " in class_string:
            j = i + 1
            while (j < len(list_of_classes)) and not (" - " in list_of_classes[j]['nameandteacher']):
                starting = class_string.find('(')
                ending = class_string.find(" - ")
                substring = class_string[starting+1:ending]
                symbol = substring.replace(')', '')
                temp_string += symbol
                temp_string += " - "
                teacher_string = list_of_classes[j]['nameandteacher']
                temp_string += teacher_string
                j += 1
                data.append(temp_string)
                temp_string = ""

        with open("class_data.txt", "w") as outfile:
            json.dump(data, outfile)
        f.close()
