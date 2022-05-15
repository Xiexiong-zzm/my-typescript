type PersonTest = "name" | "school" | "major"

type Obj =  {
  [p in PersonTest]: string
}