input = open("./test.txt", "r")
output = open("./test2.txt", "w")
secondLastLine, lastLine = input.readline(), input.readline()
output.write("`" + secondLastLine.replace("`", "\`"))
secondLastLine = lastLine
lastLine = input.readline()
for line in input:
	output.write(secondLastLine.replace("`", "\`"))
	secondLastLine = lastLine
	lastLine = line
output.write(secondLastLine.replace("`", "\`"))
output.write(lastLine.replace("`", "\`") + "`")
input.close()
output.close()