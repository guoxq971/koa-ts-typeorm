import { Entity, Column, PrimaryGeneratedColumn, AfterInsert } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    nullable: false,
    unique: true,
  })
  public login: string;

  @Column({
    length: 100,
    unique: true,
    nullable: false,
  })
  public email: string;

  @Column({
    length: 80,
  })
  public firstName: string;

  @Column({
    length: 80,
    nullable: true,
  })
  public lastName: string;

  @Column({
    nullable: false,
    select: false,
  })
  public password: string;

  @Column({
    name: "date_create",
    default: () => "NOW()", // tslint:disable-line
  })
  public dateCreate: Date;

  @AfterInsert()
  protected afterSave(): void {
    console.log("Create user: ", this.email);
  }
}
