const sidebar = document.querySelector("#sidebar");
const buttonToggler = document.querySelector(".navigation__toggler");
const buttonCloser = document.querySelector(".navigation__closer");
const Project = document.querySelector('#valueProjact')
const Object = document.querySelector('#Object')

const containerValue = {
  projectComplate: 420,
  yearExperience: "50+",
}

const navigattionMenus = document.querySelector("
navigation_menus")

const navigattionMenus =[(
  title: "work",
  link: "/#",
  ),
  (
  title: about,
  link: "/#"
  )
  (
    title: contact,
    link: "/#"
    )
    (
      title: servis,
      link: "/#"
      );]

      const navigationMenu.map((navigation) =>{
        return navigattionMenus
      })

      console.log("");

console.log("ini value nya",containerValue)
/**
 * Untuk menampilkan sidebar ketika diklik
 * 
 * Cara baca: 
 * Button toggler ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * tambahkan class tambahan yaitu "show" dan buang class "hide"
 *  */
buttonToggler.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  sidebar.classList.remove("hide");
});

/**
 * Untuk menutup sidebar ketika diklik
 * 
 * Cara baca: 
 * Button closer ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * hapus class tambahan yaitu "hide" dan tambah class "show"
 *  */
buttonCloser.addEventListener("click", () => {
  sidebar.classList.remove("show");
  sidebar.classList.toggle("hide");
});
 
Project.append(containerValue.projectComplate)
Object.append(containerValue.yearExperience)