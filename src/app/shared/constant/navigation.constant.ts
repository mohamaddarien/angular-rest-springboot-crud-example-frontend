export class NavigationConstant{
  public static LOCAL                 = 'http://localhost:8080/';
  public static LOGIN                 = '/login';
  public static HOME                  = '';

  public static EMPLOYEES   = NavigationConstant.HOME + '/employees/';
  public static EMPLOYEES_CREATE   = NavigationConstant.HOME + NavigationConstant.EMPLOYEES +'/create';
}