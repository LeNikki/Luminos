export default function Tutorial() {
  const students = [
    {
      id: 1,
      name: "Angela",
    },
    {
      id: 2,
      name: "Kate",
    },
    {
      id: 3,
      name: "David",
    },
    {
      id: 4,
      name: "Kurt",
    },
  ];

  const namewithK = students.find((stud) => /k/i.test(stud.name));
  console.log(namewithK);

  const studentNamesOnly = students.map((stud) => {
    return stud.name;
  });
  console.log(studentNamesOnly);
  return (
    <div className="p-20">
      <h1 className="font-bold text-2xl">Array Methods Tutorial</h1>
      <div>
        <section>
          {students.map((student) => {
            return (
              <>
                <p
                  key={student.id}
                  className="p-2 border-2 m-2 w-44 text-center"
                >
                  {student.name}
                </p>
              </>
            );
          })}

          <p>n</p>
        </section>
      </div>
    </div>
  );
}
