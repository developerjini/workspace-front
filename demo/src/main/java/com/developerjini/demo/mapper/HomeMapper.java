package com.developerjini.demo.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface HomeMapper {
  @Select("select now()")
  String getTime();

  @Select("select * from tbl_sample")
  List<Map<String, Object>> getList();
  
  @Insert("insert into tbl_sample values (#{no}, #{name}, #{score})")
  void insert(Map<String, Object> map);
  
  @Delete("delete from tbl_sample where no = #{no}")
  void remove(Integer no);
}
