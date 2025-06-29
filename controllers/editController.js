const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getEdit = async function (req, res) {
  const id = String(req.params.id);

  try {
    const data = await prisma.data.findUnique({
      where: { id: (id) },
      select: {
        id: true,
        keyA: true,
        keyB: true,
        lastName: true,
        firstName: true,
        middleName: true,
        gender: true,
        birthdate: true,
        hobbies: true,
        address: true,
        zip: true,
        civilStatus: true,
      },
    });
    if (data == null) {
      res.status(404).send("Data not found");
    } else {
      const { id, keyA, keyB, lastName, firstName, middleName, gender, birthdate, hobbies, address, zip, civilStatus } = data;
      const affineEncrypt = (str) => {
        let result = '';
        for (let i = 0; i < str.length; i++) {
          const charCode = str.charCodeAt(i);
          if (charCode >= 65 && charCode <= 90) { // uppercase letters
            const encryptedCharCode = (keyA * (charCode - 65) + keyB) % 26 + 65;
            result += String.fromCharCode(encryptedCharCode);
          } else if (charCode >= 97 && charCode <= 122) { // lowercase letters
            const encryptedCharCode = (keyA * (charCode - 97) + keyB) % 26 + 97;
            result += String.fromCharCode(encryptedCharCode);
          } else {
            result += str[i];
          }
        }
        return result;
      };
      const encryptedLastName = affineEncrypt(lastName);
      const encryptedFirstName = affineEncrypt(firstName);
      const editedData = {
        id,
        keyA,
        keyB,
        lastName: encryptedLastName,
        firstName: encryptedFirstName,
        middleName,
        gender,
        birthdate,
        hobbies,
        address,
        zip,
        civilStatus,
      };
      res.render("edit", { title: "Edit Data", data: editedData });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred");
  }
};


// exports.updatedData = async function (req, res) {
//   const id = String(req.params.id);
//   const { keyA, keyB, lastName, firstName, middleName, gender, birthdate, hobbies, address, zip, civilStatus } = req.body;

//   // Affine encryption function
//   const affineEncrypt = (str, keyA, keyB) => {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//       const charCode = str.charCodeAt(i);
//       if (charCode >= 65 && charCode <= 90) {  // uppercase letters
//         const encryptedCharCode = ((keyA * (charCode - 65)) + keyB) % 26 + 65;
//         result += String.fromCharCode(encryptedCharCode);
//       } else if (charCode >= 97 && charCode <= 122) {  // lowercase letters
//         const encryptedCharCode = ((keyA * (charCode - 97)) + keyB) % 26 + 97;
//         result += String.fromCharCode(encryptedCharCode);
//       } else {
//         result += str[i];
//       }
//     }
//     return result;
//   };

//   // Retrieve existing data
//   const existingData = await prisma.data.findUnique({
//     where: {
//       id: (id)
//     },
//     select: {
//       id: true,
//       keyA: true,
//       keyB: true,
//       lastName: true,
//       firstName: true,
//       middleName: true,
//       gender: true,
//       birthdate: true,
//       hobbies: true,
//       address: true,
//       zip: true,
//       civilStatus: true
//     }
//   });
//   const encryptedLastName = affineEncrypt(lastName);
//   const encryptedFirstName = affineEncrypt(firstName);

  
//   // Update fields based on selected data values
//   const updatedData = await prisma.data.update({
//     where: {
//       id: (id)
//     },
//     data: {
//       keyA: existingData.keyA,
//       keyB: existingData.keyB,
//       lastName: lastName || existingData.lastName,
//       firstName: firstName || existingData.firstName,
//       middleName: middleName || existingData.middleName,
//       gender: gender || existingData.gender,
//       birthdate: birthdate || existingData.birthdate,
//       hobbies: hobbies || existingData.hobbies,
//       address: address || existingData.address,
//       zip: zip || existingData.zip,
//       civilStatus: civilStatus || existingData.civilStatus
//     },
//     select: {
//       id: true,
//       keyA: true,
//       keyB: true,
//       lastName: true,
//       firstName: true,
//       middleName: true,
//       gender: true,
//       birthdate: true,
//       hobbies: true,
//       address: true,
//       zip: true,
//       civilStatus: true
//     }
//   });

//   res.status(200).json({ data: updatedData });
// };

// Find the multiplicative inverse of a modulo m
function findModInverse(a, m) {
  const g = gcd(a, m);
  if (g !== 1) {
    throw new Error('Inverse does not exist.');
  }
  return mod(a, m);
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

  

function generateCoPrime() {
  let num;
  do {
    num = Math.floor(Math.random() * 26);
  } while (gcd(num, 26) !== 1);
  return num;
}

function gcd(keyA, keyB) {
  if (keyB === 0) {
    return keyA;
  } else {
    return gcd(keyB, keyA % keyB);
  }
}

exports.updatedData = async function (req, res) {
  const id = String(req.params.id);
  const { keyA, keyB, lastName, firstName, middleName, gender, birthdate, hobbies, address, zip, civilStatus } = req.body;

  // Affine encryption function
  const affineEncrypt = (str, keyA, keyB) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {  // uppercase letters
        const encryptedCharCode = ((keyA * (charCode - 65)) + keyB) % 26 + 65;
        result += String.fromCharCode(encryptedCharCode);
      } else if (charCode >= 97 && charCode <= 122) {  // lowercase letters
        const encryptedCharCode = ((keyA * (charCode - 97)) + keyB) % 26 + 97;
        result += String.fromCharCode(encryptedCharCode);
      } else {
        result += str[i];
      }
    }
    return result;
  };

  // Affine decryption function
  const affineDecrypt = (str, keyA, keyB) => {
    let result = '';
    const inverseA = findModInverse(keyA, 26);
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {  // uppercase letters
        const decryptedCharCode = mod(inverseA * (charCode - keyB - 65), 26) + 65;
        result += String.fromCharCode(decryptedCharCode);
      } else if (charCode >= 97 && charCode <= 122) {  // lowercase letters
        const decryptedCharCode = mod(inverseA * (charCode - keyB - 97), 26) + 97;
        result += String.fromCharCode(decryptedCharCode);
      } else {
        result += str[i];
      }
    }
    return result;
  };

  // Retrieve existing data
  const existingData = await prisma.data.findUnique({
    where: {
      id: id
    },
    select: {
      id: true,
      keyA: true,
      keyB: true,
      lastName: true,
      firstName: true,
      middleName: true,
      gender: true,
      birthdate: true,
      hobbies: true,
      address: true,
      zip: true,
      civilStatus: true
    }
  });

  // Decrypt existing data
  const decryptedLastName = affineDecrypt(existingData.lastName, existingData.keyA, existingData.keyB);
  const decryptedFirstName = affineDecrypt(existingData.firstName, existingData.keyA, existingData.keyB);

  // Encrypt updated data
  const encryptedLastName = affineEncrypt(lastName, existingData.keyA, existingData.keyB);
  const encryptedFirstName = affineEncrypt(firstName, existingData.keyA, existingData.keyB);

  // Update fields based on selected data values
  const updatedData = await prisma.data.update({
    where: {
      id: id
    },
    data: {
      keyA: existingData.keyA,
      keyB: existingData.keyB,
      lastName: encryptedLastName || existingData.lastName,
      firstName: encryptedFirstName || existingData.firstName,
      middleName: middleName || existingData.middleName,
      gender: gender || existingData.gender,
      birthdate: birthdate || existingData.birthdate,
      hobbies: hobbies || existingData.hobbies,
      address: address || existingData.address,
      zip: zip || existingData.zip,
      civilStatus: civilStatus || existingData.civilStatus
      },
      select: {
      id: true,
      keyA: true,
      keyB: true,
      lastName: true,
      firstName: true,
      middleName: true,
      gender: true,
      birthdate: true,
      hobbies: true,
      address: true,
      zip: true,
      civilStatus: true
      }
      });
      
      // Decrypt updated data
      const decryptedUpdatedLastName = affineDecrypt(updatedData.lastName, updatedData.keyA, updatedData.keyB);
      const decryptedUpdatedFirstName = affineDecrypt(updatedData.firstName, updatedData.keyA, updatedData.keyB);
      res.redirect(`/edit/${id}`);

      };
      
      
      
      
      