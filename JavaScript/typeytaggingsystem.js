/*

1️ How early JavaScript stored values in memory

    Early JavaScript engines (like the first ones in the 1990s) used a type tagging system.
    Each value in memory looked like this:

    | TYPE TAG | ACTUAL VALUE |

    The type tag told what kind of value it is
    The actual value stored the data or a pointer


2️ Type tags used by early JS engines

    They used a few bits to represent types:

    Type	Tag value
    Object	0
    Integer	1
    Double	2
    String	3
    Boolean	4

    👉 Important:
        Objects had tag = 0


3️ How objects were stored

    Objects were stored using pointers:

    TYPE TAG = 0   → means "object"
    VALUE    = memory address of the object

    Example:
    let obj = {};

    ---------------------------------------------------

    In memory (simplified):
    | 0 | 0xA12F |

    0 → object
    0xA12F → address where {} is stored

    ---------------------------------------------------

    Example:
    | 0 | 0xA12F |

    Type tag → the left field
    Tag value → 0
    Meaning → 0 represents object

    So you can safely say:
    “The type tag has value 0, which means object.”

    ✔️ That sentence is 100% correct.

4️ How null was stored

    Now comes the key part.

    null means:
    “No object / empty reference”

    So engines represented null as:
    | 0 | 0x0000 |


    Type tag = 0 → object
    Pointer = 0 → null pointer

    ⚠️ Null pointer is literally 0 in memory


5️ Why typeof null === "object"

    When typeof checks a value, it looks only at the type tag.

    For null:
    Tag = 0 → object


    So JavaScript reports:
    typeof null   // "object"


    Even though logically null is not an object, memory-wise it looked like one.


6️ Visual comparison
    Value	 Tag	      Pointer	   Meaning
    {}	     0	           0xABCD	   real object
    null	 0	           0x0000	   no object

    Both had tag = 0, so JS couldn't distinguish them using typeof.


7️ Why this bug was never fixed

    Fixing it would break millions of existing programs.
    So JavaScript kept this behavior forever.

    Even today:
    typeof null === "object"  // true


8️ Correct way to check for null

    Never use typeof for null.

    ✅ Correct:
    value === null

    or:
    value == null   // checks null OR undefined

*/