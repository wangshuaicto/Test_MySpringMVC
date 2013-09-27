package com.shuai.web.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;


@Entity
@Table(name="T_User")
public class User {
	
	
//	@GenericGenerator(name = "system-uuid", strategy = "uuid")　声明一个策略通用生成器，name为"system-uuid",策略strategy为"uuid"。
//	　　@GeneratedValue(generator = "system-uuid")　用generator属性指定要使用的策略生成器。
//	　　这是我在项目中使用的一种方式，生成32位的字符串，是唯一的值。最通用的，适用于所有数据库
	
	
	//声明主键
	@Id
	@GeneratedValue(generator="system-uuid")
	@GenericGenerator(name="system-uuid",strategy="uuid")
	@Column(length=32)
	private String id;
	@Column(length=32)
	private String UsersName;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	@Column(length=32)
	private String age;
	public String getUsersName() {
		return UsersName;
	}
	public void setUsersName(String usersName) {
		UsersName = usersName;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
}
