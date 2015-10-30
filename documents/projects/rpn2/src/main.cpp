#include <stdio.h>
#include <string>
#include "data.hpp"
#include <fstream>
#include <stack>

std::string line;
std::ifstream file;
char op;
int main() {
    std::stack<type::types> stack;
    file.open("numbers.txt");
        
    while(!file.eof()) {
        getline(file, line);
        printf("Line: %s\n", line.c_str());
        type::types buf;

        for(unsigned int i = 0; i < line.size(); i++) {
             if(!std::isspace(line[i]) && std::isdigit(line[i])) {
                 if(line.find(".") != std::string::npos) {
                     buf.f = std::stof(line);
                     stack.push(buf);
                 } else {
                     buf.i = std::stoi(line);
                     stack.push(buf);
                }
            }
        }
    }
}
