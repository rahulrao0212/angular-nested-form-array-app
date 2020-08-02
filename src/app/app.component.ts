import { Component } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-nested-form-array-app';

  empForm: FormGroup;


  constructor(private fb: FormBuilder) {

    this.empForm = this.fb.group({
      employees: this.fb.array([]),
    })
  }

  //getter for employees
  employees(): FormArray {
    return this.empForm.get("employees") as FormArray
  }


  newEmployee(): FormGroup {
    return this.fb.group({
      firstName: '',
      lastName: '',
      skills: this.fb.array([])
    })
  }


  addEmployee() {
    console.log("Adding an employee");
    this.employees().push(this.newEmployee());
  }


  removeEmployee(empIndex: number) {
    this.employees().removeAt(empIndex);
  }

  //getter for skills
  employeeSkills(empIndex: number): FormArray {
    return this.employees().at(empIndex).get("skills") as FormArray
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    })
  }

  addEmployeeSkill(empIndex: number) {
    this.employeeSkills(empIndex).push(this.newSkill());
  }

  removeEmployeeSkill(empIndex: number, skillIndex: number) {
    this.employeeSkills(empIndex).removeAt(skillIndex);
  }

  onSubmit() {
    console.log(this.empForm.value);
  }
}
