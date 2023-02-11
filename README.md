# React-crash-course-2021-bruceFE-master
**1. 为js添加ts功能**

    yarn add @types/qs -D  
//为qs添加index.d.ts文件

**2. 为数据添加类型**
```
export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
}
interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
}
```
被添加的数据
```
export const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {}
```
