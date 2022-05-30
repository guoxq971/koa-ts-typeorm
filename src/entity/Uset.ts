import moment = require("moment");
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column({
    nullable: true,
  })
  public name: string;

  @CreateDateColumn({
    name: "create_time",
    comment: "创建时间",
    transformer: {
      to(value) {
        return moment(value).format("yyyy-MM-DD HH:mm:ss");
      },
      from(value) {
        return moment(value).format("yyyy-MM-DD HH:mm:ss");
      },
    },
  })
  public createTime?: Date;

  @UpdateDateColumn({
    name: "update_time",
    comment: "更新时间",
    transformer: {
      // 设置值触发
      to(value) {
        return moment(value).format("yyyy-MM-DD HH:mm:ss");
      },
      // 取值触发
      from(value) {
        return moment(value).format("yyyy-MM-DD HH:mm:ss");
      },
    },
  })
  public updateTime?: Date;

  @AfterInsert()
  protected afterSave(): void {
    console.log("Create user: ", this);
  }
}
