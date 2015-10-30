CC = clang++
# ~> pacman -S libc++
# resolving dependencies...
# looking for conflicting packages...
#
# Packages (2) libc++abi-3.7.0-1  libc++-3.7.0-1
# ==omitted==
# compile with `clang++ -std=c++11 -stdlib=libc++ -lc++abi` to use libc++
CFLAGS = -Wall -pipe -g -std=c++11 -stdlib=libc++ -lc++abi
TARGET = rpn

all: $(TARGET)

release: clean $(TARGET) docs

docs:
	doxygen

$(TARGET): clean
	$(CC) $(CFLAGS) -o $(TARGET) src/*.cpp

clean:
	rm -f *.a *.o *.la *.lo *.so *.so.* *.out $(TARGET)
	rm -rf docs
