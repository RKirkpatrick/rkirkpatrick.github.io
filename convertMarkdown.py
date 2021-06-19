input = open("./test.txt", "r")
output = open("./test2.txt", "w")
secondLastLine, lastLine = input.readline(), input.readline()
for line in input:
	output.write("\"" + secondLastLine.replace("\"", "\\\"").rstrip("\n") + "\\n\" +\n")
	secondLastLine = lastLine
	lastLine = line
	output.write("\"" + secondLastLine.replace("\"", "\\\"").rstrip("\n") + "\\n\" +\n")
output.write("\"" + lastLine.replace("\"", "\\\"").rstrip("\n") + "\"")
input.close()
output.close()