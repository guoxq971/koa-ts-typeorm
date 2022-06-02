import moment = require("moment");
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";
import { Base } from "./Base";
@Entity()
export class User extends Base {
  @Column({
    nullable: true,
  })
  public name: string;

  @AfterInsert()
  protected afterSave(): void {
    console.log("Create user: ", this);
  }
}
