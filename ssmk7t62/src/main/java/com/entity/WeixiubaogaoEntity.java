package com.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.beanutils.BeanUtils;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.enums.FieldFill;
import com.baomidou.mybatisplus.enums.IdType;


/**
 * 维修报告
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2021-03-02 09:30:01
 */
@TableName("weixiubaogao")
public class WeixiubaogaoEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public WeixiubaogaoEntity() {
		
	}
	
	public WeixiubaogaoEntity(T t) {
		try {
			BeanUtils.copyProperties(this, t);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 主键id
	 */
	@TableId
	private Long id;
	/**
	 * 实验室号
	 */
					
	private String shiyanshihao;
	
	/**
	 * 实验室名称
	 */
					
	private String shiyanshimingcheng;
	
	/**
	 * 图片
	 */
					
	private String tupian;
	
	/**
	 * 设备名称
	 */
					
	private String shebeimingcheng;
	
	/**
	 * 损坏原因
	 */
					
	private String sunhuaiyuanyin;
	
	/**
	 * 维修情况
	 */
					
	private String weixiuqingkuang;
	
	/**
	 * 日期
	 */
				
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd")
	@DateTimeFormat 		
	private Date riqi;
	
	/**
	 * 是否处理
	 */
					
	private String shifouchuli;
	
	/**
	 * 账号
	 */
					
	private String zhanghao;
	
	/**
	 * 姓名
	 */
					
	private String xingming;
	
	/**
	 * 是否审核
	 */
					
	private String sfsh;
	
	/**
	 * 审核回复
	 */
					
	private String shhf;
	
	/**
	 * 用户id
	 */
					
	private Long userid;
	
	
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
	private Date addtime;

	public Date getAddtime() {
		return addtime;
	}
	public void setAddtime(Date addtime) {
		this.addtime = addtime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * 设置：实验室号
	 */
	public void setShiyanshihao(String shiyanshihao) {
		this.shiyanshihao = shiyanshihao;
	}
	/**
	 * 获取：实验室号
	 */
	public String getShiyanshihao() {
		return shiyanshihao;
	}
	/**
	 * 设置：实验室名称
	 */
	public void setShiyanshimingcheng(String shiyanshimingcheng) {
		this.shiyanshimingcheng = shiyanshimingcheng;
	}
	/**
	 * 获取：实验室名称
	 */
	public String getShiyanshimingcheng() {
		return shiyanshimingcheng;
	}
	/**
	 * 设置：图片
	 */
	public void setTupian(String tupian) {
		this.tupian = tupian;
	}
	/**
	 * 获取：图片
	 */
	public String getTupian() {
		return tupian;
	}
	/**
	 * 设置：设备名称
	 */
	public void setShebeimingcheng(String shebeimingcheng) {
		this.shebeimingcheng = shebeimingcheng;
	}
	/**
	 * 获取：设备名称
	 */
	public String getShebeimingcheng() {
		return shebeimingcheng;
	}
	/**
	 * 设置：损坏原因
	 */
	public void setSunhuaiyuanyin(String sunhuaiyuanyin) {
		this.sunhuaiyuanyin = sunhuaiyuanyin;
	}
	/**
	 * 获取：损坏原因
	 */
	public String getSunhuaiyuanyin() {
		return sunhuaiyuanyin;
	}
	/**
	 * 设置：维修情况
	 */
	public void setWeixiuqingkuang(String weixiuqingkuang) {
		this.weixiuqingkuang = weixiuqingkuang;
	}
	/**
	 * 获取：维修情况
	 */
	public String getWeixiuqingkuang() {
		return weixiuqingkuang;
	}
	/**
	 * 设置：日期
	 */
	public void setRiqi(Date riqi) {
		this.riqi = riqi;
	}
	/**
	 * 获取：日期
	 */
	public Date getRiqi() {
		return riqi;
	}
	/**
	 * 设置：是否处理
	 */
	public void setShifouchuli(String shifouchuli) {
		this.shifouchuli = shifouchuli;
	}
	/**
	 * 获取：是否处理
	 */
	public String getShifouchuli() {
		return shifouchuli;
	}
	/**
	 * 设置：账号
	 */
	public void setZhanghao(String zhanghao) {
		this.zhanghao = zhanghao;
	}
	/**
	 * 获取：账号
	 */
	public String getZhanghao() {
		return zhanghao;
	}
	/**
	 * 设置：姓名
	 */
	public void setXingming(String xingming) {
		this.xingming = xingming;
	}
	/**
	 * 获取：姓名
	 */
	public String getXingming() {
		return xingming;
	}
	/**
	 * 设置：是否审核
	 */
	public void setSfsh(String sfsh) {
		this.sfsh = sfsh;
	}
	/**
	 * 获取：是否审核
	 */
	public String getSfsh() {
		return sfsh;
	}
	/**
	 * 设置：审核回复
	 */
	public void setShhf(String shhf) {
		this.shhf = shhf;
	}
	/**
	 * 获取：审核回复
	 */
	public String getShhf() {
		return shhf;
	}
	/**
	 * 设置：用户id
	 */
	public void setUserid(Long userid) {
		this.userid = userid;
	}
	/**
	 * 获取：用户id
	 */
	public Long getUserid() {
		return userid;
	}

}
