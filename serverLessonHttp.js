var express = require("express");
var app = express();
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
var port = process.env.PORT || 2410;
var langList=['French','English','Latin','Other'];
var bestList=['Yes','No']
var list = [
  {"bookid":"1","name":"The Lord of the Rings","author":"J. R. R. Tolkien","year":"1954","genre":"Fiction","newarrival":"Yes","bestseller":"Yes","language":"English","publisher":"Pengiun","price":"740","blurb":"Blurb::The Lord of the Rings:J. R. R. Tolkien:1954","description":"Description::The Lord of the Rings:J. R. R. Tolkien:1954","avgrating":"9","review":"Review::The Lord of the Rings:J. R. R. Tolkien:1954"},
  {"bookid":"2","name":"The Little Prince","author":"Antoine de Saint-Exup\u00e9ry","year":"1943","genre":"Fiction","newarrival":"Yes","bestseller":"No","language":"French","publisher":"HarperCollins","price":"200","blurb":"Blurb::The Little Prince:Antoine de Saint-Exup\u00e9ry:1943","description":"Description::The Little Prince:Antoine de Saint-Exup\u00e9ry:1943","avgrating":"8","review":"Review::The Little Prince:Antoine de Saint-Exup\u00e9ry:1943"},
  {"bookid":"3","name":"Harry Potter and the Philosophers Stone","author":"J. K. Rowling","year":"1997","genre":"Fiction","newarrival":"No","bestseller":"Yes","language":"English","publisher":"Knopf","price":"590","blurb":"Blurb::Harry Potter and the Philosophers Stone:J. K. Rowling:1997","description":"Description::Harry Potter and the Philosophers Stone:J. K. Rowling:1997","avgrating":"7","review":"Review::Harry Potter and the Philosophers Stone:J. K. Rowling:1997"},
  {"bookid":"4","name":"The Hobbit","author":"J. R. R. Tolkien","year":"1937","genre":"Fiction","newarrival":"No","bestseller":"No","language":"Latin","publisher":"Other","price":"310","blurb":"Blurb::The Hobbit:J. R. R. Tolkien:1937","description":"Description::The Hobbit:J. R. R. Tolkien:1937","avgrating":"6","review":"Review::The Hobbit:J. R. R. Tolkien:1937"},
  {"bookid":"5","name":"And Then There Were None","author":"Agatha Christie","year":"1939","genre":"Fiction","newarrival":"Yes","bestseller":"Yes","language":"English","publisher":"Pengiun","price":"870","blurb":"Blurb::And Then There Were None:Agatha Christie:1939","description":"Description::And Then There Were None:Agatha Christie:1939","avgrating":"9","review":"Review::And Then There Were None:Agatha Christie:1939"},
  {"bookid":"6","name":"Dream of the Red Chamber","author":"Cao Xueqin","year":"1791","genre":"Fiction","newarrival":"Yes","bestseller":"No","language":"Other","publisher":"HarperCollins","price":"670","blurb":"Blurb::Dream of the Red Chamber:Cao Xueqin:1791","description":"Description::Dream of the Red Chamber:Cao Xueqin:1791","avgrating":"8","review":"Review::Dream of the Red Chamber:Cao Xueqin:1791"},
  {"bookid":"7","name":"The Lion, the Witch and the Wardrobe","author":"C. S. Lewis","year":"1950","genre":"Fiction","newarrival":"No","bestseller":"Yes","language":"English","publisher":"Knopf","price":"890","blurb":"Blurb::The Lion, the Witch and the Wardrobe:C. S. Lewis:1950","description":"Description::The Lion, the Witch and the Wardrobe:C. S. Lewis:1950","avgrating":"7","review":"Review::The Lion, the Witch and the Wardrobe:C. S. Lewis:1950"},
  {"bookid":"8","name":"She: A History of Adventure","author":"H. Rider Haggard","year":"1887","genre":"Fiction","newarrival":"No","bestseller":"No","language":"English","publisher":"Other","price":"420","blurb":"Blurb::She: A History of Adventure:H. Rider Haggard:1887","description":"Description::She: A History of Adventure:H. Rider Haggard:1887","avgrating":"6","review":"Review::She: A History of Adventure:H. Rider Haggard:1887"},
  {"bookid":"9","name":"The Adventures of Pinocchio","author":"Carlo Collodi","year":"1881","genre":"Fiction","newarrival":"Yes","bestseller":"Yes","language":"French","publisher":"Pengiun","price":"540","blurb":"Blurb::The Adventures of Pinocchio:Carlo Collodi:1881","description":"Description::The Adventures of Pinocchio:Carlo Collodi:1881","avgrating":"9","review":"Review::The Adventures of Pinocchio:Carlo Collodi:1881"},
  {"bookid":"10","name":"Vardi Wala Gunda","author":"Ved Prakash Sharma","year":"1992","genre":"Mystery","newarrival":"Yes","bestseller":"No","language":"English","publisher":"Pengiun","price":"800","blurb":"Blurb::Vardi Wala Gunda:Ved Prakash Sharma:1992","description":"Description::Vardi Wala Gunda:Ved Prakash Sharma:1992","avgrating":"8","review":"Review::Vardi Wala Gunda:Ved Prakash Sharma:1992"},
  {"bookid":"11","name":"The Da Vinci Code","author":"Dan Brown","year":"2003","genre":"Mystery","newarrival":"No","bestseller":"Yes","language":"Latin","publisher":"Pengiun","price":"140","blurb":"Blurb::The Da Vinci Code:Dan Brown:2003","description":"Description::The Da Vinci Code:Dan Brown:2003","avgrating":"7","review":"Review::The Da Vinci Code:Dan Brown:2003"},
  {"bookid":"12","name":"Harry Potter and the Chamber of Secrets","author":"J. K. Rowling","year":"1998","genre":"Fiction","newarrival":"No","bestseller":"No","language":"English","publisher":"Other","price":"370","blurb":"Blurb::Harry Potter and the Chamber of Secrets:J. K. Rowling:1998","description":"Description::Harry Potter and the Chamber of Secrets:J. K. Rowling:1998","avgrating":"6","review":"Review::Harry Potter and the Chamber of Secrets:J. K. Rowling:1998"},
  {"bookid":"13","name":"Harry Potter and the Prisoner of Azkaban","author":"J. K. Rowling","year":"1999","genre":"Fiction","newarrival":"Yes","bestseller":"Yes","language":"Other","publisher":"Other","price":"890","blurb":"Blurb::Harry Potter and the Prisoner of Azkaban:J. K. Rowling:1999","description":"Description::Harry Potter and the Prisoner of Azkaban:J. K. Rowling:1999","avgrating":"9","review":"Review::Harry Potter and the Prisoner of Azkaban:J. K. Rowling:1999"},
  {"bookid":"14","name":"Harry Potter and the Goblet of Fire","author":"J. K. Rowling","year":"2000","genre":"Fiction","newarrival":"Yes","bestseller":"No","language":"English","publisher":"Other","price":"380","blurb":"Blurb::Harry Potter and the Goblet of Fire:J. K. Rowling:2000","description":"Description::Harry Potter and the Goblet of Fire:J. K. Rowling:2000","avgrating":"8","review":"Review::Harry Potter and the Goblet of Fire:J. K. Rowling:2000"},
  {"bookid":"15","name":"Harry Potter and the Order of the Phoenix","author":"J. K. Rowling","year":"2003","genre":"Fiction","newarrival":"No","bestseller":"Yes","language":"English","publisher":"Other","price":"230","blurb":"Blurb::Harry Potter and the Order of the Phoenix:J. K. Rowling:2003","description":"Description::Harry Potter and the Order of the Phoenix:J. K. Rowling:2003","avgrating":"7","review":"Review::Harry Potter and the Order of the Phoenix:J. K. Rowling:2003"},
  {"bookid":"16","name":"Harry Potter and the Half-Blood Prince","author":"J. K. Rowling","year":"2005","genre":"Fiction","newarrival":"No","bestseller":"No","language":"Other","publisher":"Other","price":"540","blurb":"Blurb::Harry Potter and the Half-Blood Prince:J. K. Rowling:2005","description":"Description::Harry Potter and the Half-Blood Prince:J. K. Rowling:2005","avgrating":"6","review":"Review::Harry Potter and the Half-Blood Prince:J. K. Rowling:2005"},
  {"bookid":"17","name":"Harry Potter and the Deathly Hallows","author":"J. K. Rowling","year":"2007","genre":"Fiction","newarrival":"Yes","bestseller":"Yes","language":"English","publisher":"HarperCollins","price":"820","blurb":"Blurb::Harry Potter and the Deathly Hallows:J. K. Rowling:2007","description":"Description::Harry Potter and the Deathly Hallows:J. K. Rowling:2007","avgrating":"9","review":"Review::Harry Potter and the Deathly Hallows:J. K. Rowling:2007"},
  {"bookid":"18","name":"The Alchemist","author":"Paulo Coelho","year":"1988","genre":"Fiction","newarrival":"Yes","bestseller":"No","language":"Latin","publisher":"Pengiun","price":"320","blurb":"Blurb::The Alchemist:Paulo Coelho:1988","description":"Description::The Alchemist:Paulo Coelho:1988","avgrating":"8","review":"Review::The Alchemist:Paulo Coelho:1988"},
  {"bookid":"19","name":"The Catcher in the Rye","author":"J. D. Salinger","year":"1951","genre":"Fiction","newarrival":"No","bestseller":"Yes","language":"English","publisher":"HarperCollins","price":"510","blurb":"Blurb::The Catcher in the Rye:J. D. Salinger:1951","description":"Description::The Catcher in the Rye:J. D. Salinger:1951","avgrating":"7","review":"Review::The Catcher in the Rye:J. D. Salinger:1951"},
  {"bookid":"20","name":"Think and Grow Rich","author":"Napoleon Hill","year":"1937","genre":"Self Help","newarrival":"No","bestseller":"No","language":"Other","publisher":"Knopf","price":"820","blurb":"Blurb::Think and Grow Rich:Napoleon Hill:1937","description":"Description::Think and Grow Rich:Napoleon Hill:1937","avgrating":"6","review":"Review::Think and Grow Rich:Napoleon Hill:1937"},
  {"bookid":"21","name":"The Bridges of Madison County","author":"Robert James Waller","year":"1992","genre":"Fiction","newarrival":"Yes","bestseller":"Yes","language":"English","publisher":"Other","price":"850","blurb":"Blurb::The Bridges of Madison County:Robert James Waller:1992","description":"Description::The Bridges of Madison County:Robert James Waller:1992","avgrating":"9","review":"Review::The Bridges of Madison County:Robert James Waller:1992"},
  {"bookid":"22","name":"You Can Heal Your Life","author":"Louise Hay","year":"1984","genre":"Self Help","newarrival":"Yes","bestseller":"No","language":"English","publisher":"Pengiun","price":"150","blurb":"Blurb::You Can Heal Your Life:Louise Hay:1984","description":"Description::You Can Heal Your Life:Louise Hay:1984","avgrating":"8","review":"Review::You Can Heal Your Life:Louise Hay:1984"},
  {"bookid":"23","name":"One Hundred Years of Solitude","author":"Gabriel Garc\u00eda M\u00e1rquez","year":"1967","genre":"Fiction","newarrival":"No","bestseller":"Yes","language":"French","publisher":"HarperCollins","price":"750","blurb":"Blurb::One Hundred Years of Solitude:Gabriel Garc\u00eda M\u00e1rquez:1967","description":"Description::One Hundred Years of Solitude:Gabriel Garc\u00eda M\u00e1rquez:1967","avgrating":"7","review":"Review::One Hundred Years of Solitude:Gabriel Garc\u00eda M\u00e1rquez:1967"},
  {"bookid":"24","name":"Lolita","author":"Vladimir Nabokov","year":"1955","genre":"Fiction","newarrival":"No","bestseller":"No","language":"English","publisher":"Knopf","price":"620","blurb":"Blurb::Lolita:Vladimir Nabokov:1955","description":"Description::Lolita:Vladimir Nabokov:1955","avgrating":"6","review":"Review::Lolita:Vladimir Nabokov:1955"},
  {"bookid":"25","name":"Heidis Years of Learning and Travel","author":"Johanna Spyri","year":"1880","genre":"Children","newarrival":"Yes","bestseller":"Yes","language":"Latin","publisher":"Other","price":"610","blurb":"Blurb::Heidis Years of Learning and Travel:Johanna Spyri:1880","description":"Description::Heidis Years of Learning and Travel:Johanna Spyri:1880","avgrating":"9","review":"Review::Heidis Years of Learning and Travel:Johanna Spyri:1880"},
  {"bookid":"26","name":"The Common Sense Book of Baby and Child Care","author":"Dr.\u00a0Benjamin Spock","year":"1946","genre":"Self Help","newarrival":"Yes","bestseller":"No","language":"English","publisher":"Pengiun","price":"530","blurb":"Blurb::The Common Sense Book of Baby and Child Care:Dr.\u00a0Benjamin Spock:1946","description":"Description::The Common Sense Book of Baby and Child Care:Dr.\u00a0Benjamin Spock:1946","avgrating":"8","review":"Review::The Common Sense Book of Baby and Child Care:Dr.\u00a0Benjamin Spock:1946"},
  {"bookid":"27","name":"Anne of Green Gables","author":"Lucy Maud Montgomery","year":"1908","genre":"Fiction","newarrival":"No","bestseller":"Yes","language":"Other","publisher":"Pengiun","price":"440","blurb":"Blurb::Anne of Green Gables:Lucy Maud Montgomery:1908","description":"Description::Anne of Green Gables:Lucy Maud Montgomery:1908","avgrating":"7","review":"Review::Anne of Green Gables:Lucy Maud Montgomery:1908"},
  {"bookid":"28","name":"Black Beauty","author":"Anna Sewell","year":"1877","genre":"Children","newarrival":"No","bestseller":"No","language":"English","publisher":"Pengiun","price":"870","blurb":"Blurb::Black Beauty:Anna Sewell:1877","description":"Description::Black Beauty:Anna Sewell:1877","avgrating":"6","review":"Review::Black Beauty:Anna Sewell:1877"},
  {"bookid":"29","name":"The Name of the Rose","author":"Umberto Eco","year":"1980","genre":"Mystery","newarrival":"Yes","bestseller":"Yes","language":"English","publisher":"Other","price":"550","blurb":"Blurb::The Name of the Rose:Umberto Eco:1980","description":"Description::The Name of the Rose:Umberto Eco:1980","avgrating":"9","review":"Review::The Name of the Rose:Umberto Eco:1980"},
  {"bookid":"30","name":"The Eagle Has Landed","author":"Jack Higgins","year":"1975","genre":"Fiction","newarrival":"Yes","bestseller":"No","language":"French","publisher":"Other","price":"820","blurb":"Blurb::The Eagle Has Landed:Jack Higgins:1975","description":"Description::The Eagle Has Landed:Jack Higgins:1975","avgrating":"8","review":"Review::The Eagle Has Landed:Jack Higgins:1975"},
  {"bookid":"31","name":"Watership Down","author":"Richard Adams","year":"1972","genre":"Fiction","newarrival":"No","bestseller":"Yes","language":"English","publisher":"Other","price":"190","blurb":"Blurb::Watership Down:Richard Adams:1972","description":"Description::Watership Down:Richard Adams:1972","avgrating":"7","review":"Review::Watership Down:Richard Adams:1972"},
  {"bookid":"32","name":"The Hite Report","author":"Shere Hite","year":"1976","genre":"Mystery","newarrival":"No","bestseller":"No","language":"Latin","publisher":"Other","price":"870","blurb":"Blurb::The Hite Report:Shere Hite:1976","description":"Description::The Hite Report:Shere Hite:1976","avgrating":"6","review":"Review::The Hite Report:Shere Hite:1976"},
  {"bookid":"33","name":"Charlottes Web","author":"E.B. White; illustrated by\u00a0Garth Williams","year":"1952","genre":"Children","newarrival":"Yes","bestseller":"Yes","language":"English","publisher":"Other","price":"820","blurb":"Blurb::Charlottes Web:E.B. White; illustrated by\u00a0Garth Williams:1952","description":"Description::Charlottes Web:E.B. White; illustrated by\u00a0Garth Williams:1952","avgrating":"9","review":"Review::Charlottes Web:E.B. White; illustrated by\u00a0Garth Williams:1952"},
  {"bookid":"34","name":"The Ginger Man","author":"J. P. Donleavy","year":"1955","genre":"Children","newarrival":"Yes","bestseller":"No","language":"Other","publisher":"HarperCollins","price":"190","blurb":"Blurb::The Ginger Man:J. P. Donleavy:1955","description":"Description::The Ginger Man:J. P. Donleavy:1955","avgrating":"8","review":"Review::The Ginger Man:J. P. Donleavy:1955"},
  {"bookid":"35","name":"The Tale of Peter Rabbit","author":"Beatrix Potter","year":"1902","genre":"Children","newarrival":"No","bestseller":"Yes","language":"English","publisher":"Pengiun","price":"730","blurb":"Blurb::The Tale of Peter Rabbit:Beatrix Potter:1902","description":"Description::The Tale of Peter Rabbit:Beatrix Potter:1902","avgrating":"7","review":"Review::The Tale of Peter Rabbit:Beatrix Potter:1902"},
  {"bookid":"36","name":"Jonathan Livingston Seagull","author":"Richard Bach","year":"1970","genre":"Children","newarrival":"No","bestseller":"No","language":"English","publisher":"HarperCollins","price":"830","blurb":"Blurb::Jonathan Livingston Seagull:Richard Bach:1970","description":"Description::Jonathan Livingston Seagull:Richard Bach:1970","avgrating":"6","review":"Review::Jonathan Livingston Seagull:Richard Bach:1970"},
  {"bookid":"37","name":"The Very Hungry Caterpillar","author":"Eric Carle","year":"1969","genre":"Children","newarrival":"Yes","bestseller":"Yes","language":"French","publisher":"Knopf","price":"510","blurb":"Blurb::The Very Hungry Caterpillar:Eric Carle:1969","description":"Description::The Very Hungry Caterpillar:Eric Carle:1969","avgrating":"9","review":"Review::The Very Hungry Caterpillar:Eric Carle:1969"},
  {"bookid":"38","name":"A Message to Garcia","author":"Elbert Hubbard","year":"1899","genre":"Mystery","newarrival":"Yes","bestseller":"No","language":"English","publisher":"Other","price":"310","blurb":"Blurb::A Message to Garcia:Elbert Hubbard:1899","description":"Description::A Message to Garcia:Elbert Hubbard:1899","avgrating":"8","review":"Review::A Message to Garcia:Elbert Hubbard:1899"},
  {"bookid":"39","name":"Sophies World","author":"Jostein Gaarder","year":"1991","genre":"Self Help","newarrival":"No","bestseller":"Yes","language":"Latin","publisher":"Pengiun","price":"560","blurb":"Blurb::Sophies World:Jostein Gaarder:1991","description":"Description::Sophies World:Jostein Gaarder:1991","avgrating":"7","review":"Review::Sophies World:Jostein Gaarder:1991"},
  {"bookid":"40","name":"Flowers in the Attic","author":"V. C. Andrews","year":"1979","genre":"Management","newarrival":"No","bestseller":"No","language":"English","publisher":"HarperCollins","price":"440","blurb":"Blurb::Flowers in the Attic:V. C. Andrews:1979","description":"Description::Flowers in the Attic:V. C. Andrews:1979","avgrating":"6","review":"Review::Flowers in the Attic:V. C. Andrews:1979"},
  {"bookid":"41","name":"To Kill a Mockingbird","author":"Harper Lee","year":"1960","genre":"Children","newarrival":"Yes","bestseller":"Yes","language":"Other","publisher":"Knopf","price":"270","blurb":"Blurb::To Kill a Mockingbird:Harper Lee:1960","description":"Description::To Kill a Mockingbird:Harper Lee:1960","avgrating":"9","review":"Review::To Kill a Mockingbird:Harper Lee:1960"},
  {"bookid":"42","name":"Angels & Demons","author":"Dan Brown","year":"2000","genre":"Mystery","newarrival":"Yes","bestseller":"No","language":"English","publisher":"Other","price":"170","blurb":"Blurb::Angels & Demons:Dan Brown:2000","description":"Description::Angels & Demons:Dan Brown:2000","avgrating":"8","review":"Review::Angels & Demons:Dan Brown:2000"},
  {"bookid":"43","name":"Kane and Abel","author":"Jeffrey Archer","year":"1979","genre":"Self Help","newarrival":"No","bestseller":"Yes","language":"English","publisher":"Pengiun","price":"440","blurb":"Blurb::Kane and Abel:Jeffrey Archer:1979","description":"Description::Kane and Abel:Jeffrey Archer:1979","avgrating":"7","review":"Review::Kane and Abel:Jeffrey Archer:1979"},
  {"bookid":"44","name":"How the Steel Was Tempered","author":"Nikolai Ostrovsky","year":"1932","genre":"Management","newarrival":"No","bestseller":"No","language":"French","publisher":"Pengiun","price":"340","blurb":"Blurb::How the Steel Was Tempered:Nikolai Ostrovsky:1932","description":"Description::How the Steel Was Tempered:Nikolai Ostrovsky:1932","avgrating":"6","review":"Review::How the Steel Was Tempered:Nikolai Ostrovsky:1932"},
  {"bookid":"45","name":"War and Peace","author":"Leo Tolstoy","year":"1869","genre":"Children","newarrival":"Yes","bestseller":"Yes","language":"English","publisher":"Pengiun","price":"770","blurb":"Blurb::War and Peace:Leo Tolstoy:1869","description":"Description::War and Peace:Leo Tolstoy:1869","avgrating":"9","review":"Review::War and Peace:Leo Tolstoy:1869"},
  {"bookid":"46","name":"The Diary of a Young Girl,\u00a0The Diary of Anne Frank","author":"Anne Frank","year":"1947","genre":"Mystery","newarrival":"Yes","bestseller":"No","language":"Latin","publisher":"Other","price":"500","blurb":"Blurb::The Diary of a Young Girl,\u00a0The Diary of Anne Frank:Anne Frank:1947","description":"Description::The Diary of a Young Girl,\u00a0The Diary of Anne Frank:Anne Frank:1947","avgrating":"8","review":"Review::The Diary of a Young Girl,\u00a0The Diary of Anne Frank:Anne Frank:1947"},
  {"bookid":"47","name":"Your Erroneous Zones","author":"Wayne Dyer","year":"1976","genre":"Self Help","newarrival":"No","bestseller":"Yes","language":"English","publisher":"Other","price":"420","blurb":"Blurb::Your Erroneous Zones:Wayne Dyer:1976","description":"Description::Your Erroneous Zones:Wayne Dyer:1976","avgrating":"7","review":"Review::Your Erroneous Zones:Wayne Dyer:1976"},
  {"bookid":"48","name":"The Purpose Driven Life","author":"Rick Warren","year":"2002","genre":"Management","newarrival":"No","bestseller":"No","language":"Other","publisher":"Other","price":"770","blurb":"Blurb::The Purpose Driven Life:Rick Warren:2002","description":"Description::The Purpose Driven Life:Rick Warren:2002","avgrating":"6","review":"Review::The Purpose Driven Life:Rick Warren:2002"},
  {"bookid":"49","name":"The Thorn Birds","author":"Colleen McCullough","year":"1977","genre":"Children","newarrival":"Yes","bestseller":"Yes","language":"English","publisher":"Other","price":"830","blurb":"Blurb::The Thorn Birds:Colleen McCullough:1977","description":"Description::The Thorn Birds:Colleen McCullough:1977","avgrating":"9","review":"Review::The Thorn Birds:Colleen McCullough:1977"},
  {"bookid":"50","name":"The Kite Runner","author":"Khaled Hosseini","year":"2003","genre":"Mystery","newarrival":"Yes","bestseller":"No","language":"English","publisher":"Other","price":"350","blurb":"Blurb::The Kite Runner:Khaled Hosseini:2003","description":"Description::The Kite Runner:Khaled Hosseini:2003","avgrating":"8","review":"Review::The Kite Runner:Khaled Hosseini:2003"},
  {"bookid":"51","name":"Valley of the Dolls","author":"Jacqueline Susann","year":"1966","genre":"Self Help","newarrival":"No","bestseller":"Yes","language":"Other","publisher":"HarperCollins","price":"680","blurb":"Blurb::Valley of the Dolls:Jacqueline Susann:1966","description":"Description::Valley of the Dolls:Jacqueline Susann:1966","avgrating":"7","review":"Review::Valley of the Dolls:Jacqueline Susann:1966"},
  {"bookid":"52","name":"The Lost Symbol","author":"Dan Brown","year":"2009","genre":"Management","newarrival":"No","bestseller":"No","language":"English","publisher":"Pengiun","price":"770","blurb":"Blurb::The Lost Symbol:Dan Brown:2009","description":"Description::The Lost Symbol:Dan Brown:2009","avgrating":"6","review":"Review::The Lost Symbol:Dan Brown:2009"},
  {"bookid":"53","name":"Gone with the Wind","author":"Margaret Mitchell","year":"1936","genre":"Children","newarrival":"Yes","bestseller":"Yes","language":"Latin","publisher":"HarperCollins","price":"660","blurb":"Blurb::Gone with the Wind:Margaret Mitchell:1936","description":"Description::Gone with the Wind:Margaret Mitchell:1936","avgrating":"9","review":"Review::Gone with the Wind:Margaret Mitchell:1936"},
  {"bookid":"54","name":"Nineteen Eighty-Four","author":"George Orwell","year":"1949","genre":"Mystery","newarrival":"Yes","bestseller":"No","language":"English","publisher":"Knopf","price":"880","blurb":"Blurb::Nineteen Eighty-Four:George Orwell:1949","description":"Description::Nineteen Eighty-Four:George Orwell:1949","avgrating":"8","review":"Review::Nineteen Eighty-Four:George Orwell:1949"},
  {"bookid":"55","name":"The Revolt of Mamie Stover","author":"William Bradford Huie","year":"1951","genre":"Self Help","newarrival":"No","bestseller":"Yes","language":"Other","publisher":"Other","price":"670","blurb":"Blurb::The Revolt of Mamie Stover:William Bradford Huie:1951","description":"Description::The Revolt of Mamie Stover:William Bradford Huie:1951","avgrating":"7","review":"Review::The Revolt of Mamie Stover:William Bradford Huie:1951"},
  {"bookid":"56","name":"The Girl with the Dragon Tattoo","author":"Stieg Larsson","year":"2005","genre":"Management","newarrival":"No","bestseller":"No","language":"English","publisher":"Pengiun","price":"220","blurb":"Blurb::The Girl with the Dragon Tattoo:Stieg Larsson:2005","description":"Description::The Girl with the Dragon Tattoo:Stieg Larsson:2005","avgrating":"6","review":"Review::The Girl with the Dragon Tattoo:Stieg Larsson:2005"},
  {"bookid":"57","name":"The Great Gatsby","author":"F. Scott Fitzgerald","year":"1925","genre":"Children","newarrival":"Yes","bestseller":"Yes","language":"English","publisher":"HarperCollins","price":"210","blurb":"Blurb::The Great Gatsby:F. Scott Fitzgerald:1925","description":"Description::The Great Gatsby:F. Scott Fitzgerald:1925","avgrating":"9","review":"Review::The Great Gatsby:F. Scott Fitzgerald:1925"},
  {"bookid":"58","name":"The Hunger Games","author":"Suzanne Collins","year":"2008","genre":"Mystery","newarrival":"Yes","bestseller":"No","language":"Other","publisher":"Knopf","price":"120","blurb":"Blurb::The Hunger Games:Suzanne Collins:2008","description":"Description::The Hunger Games:Suzanne Collins:2008","avgrating":"8","review":"Review::The Hunger Games:Suzanne Collins:2008"},
  {"bookid":"59","name":"The Young Guard","author":"Alexander Alexandrovich Fadeyev","year":"1945","genre":"Self Help","newarrival":"No","bestseller":"Yes","language":"English","publisher":"Other","price":"560","blurb":"Blurb::The Young Guard:Alexander Alexandrovich Fadeyev:1945","description":"Description::The Young Guard:Alexander Alexandrovich Fadeyev:1945","avgrating":"7","review":"Review::The Young Guard:Alexander Alexandrovich Fadeyev:1945"},
  {"bookid":"60","name":"Who Moved My Cheese?","author":"Spencer Johnson","year":"1998","genre":"Management","newarrival":"No","bestseller":"No","language":"Latin","publisher":"Pengiun","price":"210","blurb":"Blurb::Who Moved My Cheese?:Spencer Johnson:1998","description":"Description::Who Moved My Cheese?:Spencer Johnson:1998","avgrating":"6","review":"Review::Who Moved My Cheese?:Spencer Johnson:1998"},
  {"bookid":"61","name":"The Wind in the Willows","author":"Kenneth Grahame","year":"1908","genre":"Fiction","newarrival":"Yes","bestseller":"Yes","language":"English","publisher":"Pengiun","price":"770","blurb":"Blurb::The Wind in the Willows:Kenneth Grahame:1908","description":"Description::The Wind in the Willows:Kenneth Grahame:1908","avgrating":"9","review":"Review::The Wind in the Willows:Kenneth Grahame:1908"},
  {"bookid":"62","name":"The 7 Habits of Highly Effective People","author":"Stephen R. Covey","year":"1989","genre":"Children","newarrival":"Yes","bestseller":"No","language":"Other","publisher":"Pengiun","price":"360","blurb":"Blurb::The 7 Habits of Highly Effective People:Stephen R. Covey:1989","description":"Description::The 7 Habits of Highly Effective People:Stephen R. Covey:1989","avgrating":"8","review":"Review::The 7 Habits of Highly Effective People:Stephen R. Covey:1989"},
  {"bookid":"63","name":"Virgin Soil Upturned","author":"Mikhail Sholokhov","year":"1935","genre":"Mystery","newarrival":"No","bestseller":"Yes","language":"English","publisher":"Other","price":"620","blurb":"Blurb::Virgin Soil Upturned:Mikhail Sholokhov:1935","description":"Description::Virgin Soil Upturned:Mikhail Sholokhov:1935","avgrating":"7","review":"Review::Virgin Soil Upturned:Mikhail Sholokhov:1935"},
  {"bookid":"64","name":"The Celestine Prophecy","author":"James Redfield","year":"1993","genre":"Self Help","newarrival":"No","bestseller":"No","language":"English","publisher":"Other","price":"210","blurb":"Blurb::The Celestine Prophecy:James Redfield:1993","description":"Description::The Celestine Prophecy:James Redfield:1993","avgrating":"6","review":"Review::The Celestine Prophecy:James Redfield:1993"},
  {"bookid":"65","name":"The Fault in Our Stars","author":"John Green","year":"2012","genre":"Management","newarrival":"Yes","bestseller":"Yes","language":"French","publisher":"Other","price":"790","blurb":"Blurb::The Fault in Our Stars:John Green:2012","description":"Description::The Fault in Our Stars:John Green:2012","avgrating":"9","review":"Review::The Fault in Our Stars:John Green:2012"},
  {"bookid":"66","name":"The Shack","author":"William P. Young","year":"2007","genre":"Children","newarrival":"Yes","bestseller":"No","language":"English","publisher":"Other","price":"830","blurb":"Blurb::The Shack:William P. Young:2007","description":"Description::The Shack:William P. Young:2007","avgrating":"8","review":"Review::The Shack:William P. Young:2007"},
  {"bookid":"67","name":"Uncle Styopa","author":"Sergey Mikhalkov","year":"1936","genre":"Mystery","newarrival":"No","bestseller":"Yes","language":"Latin","publisher":"Other","price":"640","blurb":"Blurb::Uncle Styopa:Sergey Mikhalkov:1936","description":"Description::Uncle Styopa:Sergey Mikhalkov:1936","avgrating":"7","review":"Review::Uncle Styopa:Sergey Mikhalkov:1936"},
  {"bookid":"68","name":"The Godfather","author":"Mario Puzo","year":"1969","genre":"Self Help","newarrival":"No","bestseller":"No","language":"English","publisher":"HarperCollins","price":"790","blurb":"Blurb::The Godfather:Mario Puzo:1969","description":"Description::The Godfather:Mario Puzo:1969","avgrating":"6","review":"Review::The Godfather:Mario Puzo:1969"},
  {"bookid":"69","name":"Love Story","author":"Erich Segal","year":"1970","genre":"Management","newarrival":"Yes","bestseller":"Yes","language":"Other","publisher":"Pengiun","price":"830","blurb":"Blurb::Love Story:Erich Segal:1970","description":"Description::Love Story:Erich Segal:1970","avgrating":"9","review":"Review::Love Story:Erich Segal:1970"},
  {"bookid":"70","name":"Catching Fire","author":"Suzanne Collins","year":"2009","genre":"Fiction","newarrival":"Yes","bestseller":"No","language":"English","publisher":"HarperCollins","price":"520","blurb":"Blurb::Catching Fire:Suzanne Collins:2009","description":"Description::Catching Fire:Suzanne Collins:2009","avgrating":"8","review":"Review::Catching Fire:Suzanne Collins:2009"},
  {"bookid":"71","name":"Mockingjay","author":"Suzanne Collins","year":"2010","genre":"Children","newarrival":"No","bestseller":"Yes","language":"English","publisher":"Knopf","price":"630","blurb":"Blurb::Mockingjay:Suzanne Collins:2010","description":"Description::Mockingjay:Suzanne Collins:2010","avgrating":"7","review":"Review::Mockingjay:Suzanne Collins:2010"},
  {"bookid":"72","name":"Gone Girl","author":"Gillian Flynn","year":"2012","genre":"Mystery","newarrival":"No","bestseller":"No","language":"Other","publisher":"Other","price":"740","blurb":"Blurb::Gone Girl:Gillian Flynn:2012","description":"Description::Gone Girl:Gillian Flynn:2012","avgrating":"6","review":"Review::Gone Girl:Gillian Flynn:2012"},
  {"bookid":"73","name":"The Girl on the Train","author":"Paula Hawkins","year":"2015","genre":"Self Help","newarrival":"Yes","bestseller":"Yes","language":"English","publisher":"Pengiun","price":"230","blurb":"Blurb::The Girl on the Train:Paula Hawkins:2015","description":"Description::The Girl on the Train:Paula Hawkins:2015","avgrating":"9","review":"Review::The Girl on the Train:Paula Hawkins:2015"},
  {"bookid":"74","name":"All Quiet on the Western Front","author":"Erich Maria Remarque","year":"1929","genre":"Management","newarrival":"Yes","bestseller":"No","language":"Latin","publisher":"HarperCollins","price":"570","blurb":"Blurb::All Quiet on the Western Front:Erich Maria Remarque:1929","description":"Description::All Quiet on the Western Front:Erich Maria Remarque:1929","avgrating":"8","review":"Review::All Quiet on the Western Front:Erich Maria Remarque:1929"},
  {"bookid":"75","name":"The Bermuda Triangle","author":"Charles Berlitz","year":"1974","genre":"Children","newarrival":"No","bestseller":"Yes","language":"English","publisher":"Knopf","price":"770","blurb":"Blurb::The Bermuda Triangle:Charles Berlitz:1974","description":"Description::The Bermuda Triangle:Charles Berlitz:1974","avgrating":"7","review":"Review::The Bermuda Triangle:Charles Berlitz:1974"},
  {"bookid":"76","name":"Things Fall Apart","author":"Chinua Achebe","year":"1958","genre":"Mystery","newarrival":"No","bestseller":"No","language":"Other","publisher":"Other","price":"340","blurb":"Blurb::Things Fall Apart:Chinua Achebe:1958","description":"Description::Things Fall Apart:Chinua Achebe:1958","avgrating":"6","review":"Review::Things Fall Apart:Chinua Achebe:1958"},
  {"bookid":"77","name":"Animal Farm","author":"George Orwell","year":"1945","genre":"Self Help","newarrival":"Yes","bestseller":"Yes","language":"English","publisher":"Pengiun","price":"690","blurb":"Blurb::Animal Farm:George Orwell:1945","description":"Description::Animal Farm:George Orwell:1945","avgrating":"9","review":"Review::Animal Farm:George Orwell:1945"},
  {"bookid":"78","name":"Wolf Totem","author":"Jiang Rong","year":"2004","genre":"Management","newarrival":"Yes","bestseller":"No","language":"English","publisher":"Pengiun","price":"710","blurb":"Blurb::Wolf Totem:Jiang Rong:2004","description":"Description::Wolf Totem:Jiang Rong:2004","avgrating":"8","review":"Review::Wolf Totem:Jiang Rong:2004"},
  {"bookid":"79","name":"The Happy Hooker: My Own Story","author":"Xaviera Hollander","year":"1971","genre":"Fiction","newarrival":"No","bestseller":"Yes","language":"French","publisher":"Pengiun","price":"780","blurb":"Blurb::The Happy Hooker: My Own Story:Xaviera Hollander:1971","description":"Description::The Happy Hooker: My Own Story:Xaviera Hollander:1971","avgrating":"7","review":"Review::The Happy Hooker: My Own Story:Xaviera Hollander:1971"},
  {"bookid":"80","name":"Jaws","author":"Peter Benchley","year":"1974","genre":"Children","newarrival":"No","bestseller":"No","language":"English","publisher":"Other","price":"350","blurb":"Blurb::Jaws:Peter Benchley:1974","description":"Description::Jaws:Peter Benchley:1974","avgrating":"6","review":"Review::Jaws:Peter Benchley:1974"},
  {"bookid":"81","name":"Love You Forever","author":"Robert Munsch","year":"1986","genre":"Mystery","newarrival":"Yes","bestseller":"Yes","language":"Latin","publisher":"Other","price":"760","blurb":"Blurb::Love You Forever:Robert Munsch:1986","description":"Description::Love You Forever:Robert Munsch:1986","avgrating":"9","review":"Review::Love You Forever:Robert Munsch:1986"},
  {"bookid":"82","name":"The Womens Room","author":"Marilyn French","year":"1977","genre":"Self Help","newarrival":"Yes","bestseller":"No","language":"English","publisher":"Other","price":"360","blurb":"Blurb::The Womens Room:Marilyn French:1977","description":"Description::The Womens Room:Marilyn French:1977","avgrating":"8","review":"Review::The Womens Room:Marilyn French:1977"},
  {"bookid":"83","name":"What to Expect When You are Expecting","author":"Arlene Eisenberg\u00a0and\u00a0Heidi Murkoff","year":"1984","genre":"Management","newarrival":"No","bestseller":"Yes","language":"Other","publisher":"Other","price":"590","blurb":"Blurb::What to Expect When You are Expecting:Arlene Eisenberg\u00a0and\u00a0Heidi Murkoff:1984","description":"Description::What to Expect When You are Expecting:Arlene Eisenberg\u00a0and\u00a0Heidi Murkoff:1984","avgrating":"7","review":"Review::What to Expect When You are Expecting:Arlene Eisenberg\u00a0and\u00a0Heidi Murkoff:1984"},
  {"bookid":"84","name":"Adventures of Huckleberry Finn","author":"Mark Twain","year":"1885","genre":"Children","newarrival":"No","bestseller":"No","language":"English","publisher":"Other","price":"870","blurb":"Blurb::Adventures of Huckleberry Finn:Mark Twain:1885","description":"Description::Adventures of Huckleberry Finn:Mark Twain:1885","avgrating":"6","review":"Review::Adventures of Huckleberry Finn:Mark Twain:1885"},
  {"bookid":"85","name":"The Secret Diary of Adrian Mole, Aged 13\u00be","author":"Sue Townsend","year":"1982","genre":"Mystery","newarrival":"Yes","bestseller":"Yes","language":"English","publisher":"HarperCollins","price":"220","blurb":"Blurb::The Secret Diary of Adrian Mole, Aged 13\u00be:Sue Townsend:1982","description":"Description::The Secret Diary of Adrian Mole, Aged 13\u00be:Sue Townsend:1982","avgrating":"9","review":"Review::The Secret Diary of Adrian Mole, Aged 13\u00be:Sue Townsend:1982"},
  {"bookid":"86","name":"Pride and Prejudice","author":"Jane Austen","year":"1813","genre":"Self Help","newarrival":"Yes","bestseller":"No","language":"French","publisher":"Pengiun","price":"490","blurb":"Blurb::Pride and Prejudice:Jane Austen:1813","description":"Description::Pride and Prejudice:Jane Austen:1813","avgrating":"8","review":"Review::Pride and Prejudice:Jane Austen:1813"},
  {"bookid":"87","name":"Kon-Tiki: Across the Pacific in a Raft","author":"Thor Heyerdahl","year":"1950","genre":"Management","newarrival":"No","bestseller":"Yes","language":"English","publisher":"HarperCollins","price":"780","blurb":"Blurb::Kon-Tiki: Across the Pacific in a Raft:Thor Heyerdahl:1950","description":"Description::Kon-Tiki: Across the Pacific in a Raft:Thor Heyerdahl:1950","avgrating":"7","review":"Review::Kon-Tiki: Across the Pacific in a Raft:Thor Heyerdahl:1950"},
  {"bookid":"88","name":"The Good Soldier Svejk","author":"Jaroslav Ha\u0161ek","year":"1923","genre":"Fiction","newarrival":"No","bestseller":"No","language":"Latin","publisher":"Knopf","price":"160","blurb":"Blurb::The Good Soldier Svejk:Jaroslav Ha\u0161ek:1923","description":"Description::The Good Soldier Svejk:Jaroslav Ha\u0161ek:1923","avgrating":"6","review":"Review::The Good Soldier Svejk:Jaroslav Ha\u0161ek:1923"},
  {"bookid":"89","name":"Where the Wild Things Are","author":"Maurice Sendak","year":"1963","genre":"Children","newarrival":"Yes","bestseller":"Yes","language":"English","publisher":"Other","price":"320","blurb":"Blurb::Where the Wild Things Are:Maurice Sendak:1963","description":"Description::Where the Wild Things Are:Maurice Sendak:1963","avgrating":"9","review":"Review::Where the Wild Things Are:Maurice Sendak:1963"},
  {"bookid":"90","name":"The Power of Positive Thinking","author":"Norman Vincent Peale","year":"1952","genre":"Mystery","newarrival":"Yes","bestseller":"No","language":"Other","publisher":"Pengiun","price":"150","blurb":"Blurb::The Power of Positive Thinking:Norman Vincent Peale:1952","description":"Description::The Power of Positive Thinking:Norman Vincent Peale:1952","avgrating":"8","review":"Review::The Power of Positive Thinking:Norman Vincent Peale:1952"},
  {"bookid":"91","name":"The Secret","author":"Rhonda Byrne","year":"2006","genre":"Self Help","newarrival":"No","bestseller":"Yes","language":"English","publisher":"HarperCollins","price":"160","blurb":"Blurb::The Secret:Rhonda Byrne:2006","description":"Description::The Secret:Rhonda Byrne:2006","avgrating":"7","review":"Review::The Secret:Rhonda Byrne:2006"},
  {"bookid":"92","name":"Fear of Flying","author":"Erica Jong","year":"1973","genre":"Management","newarrival":"No","bestseller":"No","language":"English","publisher":"Knopf","price":"850","blurb":"Blurb::Fear of Flying:Erica Jong:1973","description":"Description::Fear of Flying:Erica Jong:1973","avgrating":"6","review":"Review::Fear of Flying:Erica Jong:1973"},
  {"bookid":"93","name":"Dune","author":"Frank Herbert","year":"1965","genre":"Children","newarrival":"Yes","bestseller":"Yes","language":"French","publisher":"Other","price":"850","blurb":"Blurb::Dune:Frank Herbert:1965","description":"Description::Dune:Frank Herbert:1965","avgrating":"9","review":"Review::Dune:Frank Herbert:1965"},
  {"bookid":"94","name":"Charlie and the Chocolate Factory","author":"Roald Dahl","year":"1964","genre":"Mystery","newarrival":"Yes","bestseller":"No","language":"English","publisher":"Pengiun","price":"690","blurb":"Blurb::Charlie and the Chocolate Factory:Roald Dahl:1964","description":"Description::Charlie and the Chocolate Factory:Roald Dahl:1964","avgrating":"8","review":"Review::Charlie and the Chocolate Factory:Roald Dahl:1964"},
  {"bookid":"95","name":"The Naked Ape","author":"Desmond Morris","year":"1968","genre":"Self Help","newarrival":"No","bestseller":"Yes","language":"Latin","publisher":"Pengiun","price":"260","blurb":"Blurb::The Naked Ape:Desmond Morris:1968","description":"Description::The Naked Ape:Desmond Morris:1968","avgrating":"7","review":"Review::The Naked Ape:Desmond Morris:1968"},
  {"bookid":"96","name":"Totto-chan, the Little Girl at the Window","author":"Tetsuko Kuroyanagi","year":"1981","genre":"Management","newarrival":"No","bestseller":"No","language":"English","publisher":"Pengiun","price":"590","blurb":"Blurb::Totto-chan, the Little Girl at the Window:Tetsuko Kuroyanagi:1981","description":"Description::Totto-chan, the Little Girl at the Window:Tetsuko Kuroyanagi:1981","avgrating":"6","review":"Review::Totto-chan, the Little Girl at the Window:Tetsuko Kuroyanagi:1981"},
  {"bookid":"97","name":"The Horse Whisperer","author":"Nicholas Evans","year":"1995","genre":"Fiction","newarrival":"Yes","bestseller":"Yes","language":"Other","publisher":"Other","price":"830","blurb":"Blurb::The Horse Whisperer:Nicholas Evans:1995","description":"Description::The Horse Whisperer:Nicholas Evans:1995","avgrating":"9","review":"Review::The Horse Whisperer:Nicholas Evans:1995"},
  {"bookid":"98","name":"Goodnight Moon","author":"Margaret Wise Brown","year":"1947","genre":"Children","newarrival":"Yes","bestseller":"No","language":"English","publisher":"Other","price":"590","blurb":"Blurb::Goodnight Moon:Margaret Wise Brown:1947","description":"Description::Goodnight Moon:Margaret Wise Brown:1947","avgrating":"8","review":"Review::Goodnight Moon:Margaret Wise Brown:1947"},
  {"bookid":"99","name":"The Neverending Story","author":"Michael Ende","year":"1979","genre":"Mystery","newarrival":"No","bestseller":"Yes","language":"English","publisher":"Other","price":"650","blurb":"Blurb::The Neverending Story:Michael Ende:1979","description":"Description::The Neverending Story:Michael Ende:1979","avgrating":"7","review":"Review::The Neverending Story:Michael Ende:1979"},
  {"bookid":"100","name":"The Outsiders","author":"S. E. Hinton","year":"1967","genre":"Self Help","newarrival":"No","bestseller":"No","language":"French","publisher":"Other","price":"750","blurb":"Blurb::The Outsiders:S. E. Hinton:1967","description":"Description::The Outsiders:S. E. Hinton:1967","avgrating":"6","review":"Review::The Outsiders:S. E. Hinton:1967"},
  {"bookid":"101","name":"Guess How Much I Love You","author":"Sam McBratney","year":"1994","genre":"Management","newarrival":"Yes","bestseller":"Yes","language":"English","publisher":"Other","price":"750","blurb":"Blurb::Guess How Much I Love You:Sam McBratney:1994","description":"Description::Guess How Much I Love You:Sam McBratney:1994","avgrating":"9","review":"Review::Guess How Much I Love You:Sam McBratney:1994"},
  {"bookid":"102","name":"Shogun","author":"James Clavell","year":"1975","genre":"Children","newarrival":"Yes","bestseller":"No","language":"Latin","publisher":"HarperCollins","price":"590","blurb":"Blurb::Shogun:James Clavell:1975","description":"Description::Shogun:James Clavell:1975","avgrating":"8","review":"Review::Shogun:James Clavell:1975"},
  {"bookid":"103","name":"The Poky Little Puppy","author":"Janette Sebring Lowrey","year":"1942","genre":"Mystery","newarrival":"No","bestseller":"Yes","language":"English","publisher":"Pengiun","price":"450","blurb":"Blurb::The Poky Little Puppy:Janette Sebring Lowrey:1942","description":"Description::The Poky Little Puppy:Janette Sebring Lowrey:1942","avgrating":"7","review":"Review::The Poky Little Puppy:Janette Sebring Lowrey:1942"},
  {"bookid":"104","name":"The Pillars of the Earth","author":"Ken Follett","year":"1989","genre":"Self Help","newarrival":"No","bestseller":"No","language":"Other","publisher":"HarperCollins","price":"520","blurb":"Blurb::The Pillars of the Earth:Ken Follett:1989","description":"Description::The Pillars of the Earth:Ken Follett:1989","avgrating":"6","review":"Review::The Pillars of the Earth:Ken Follett:1989"},
  {"bookid":"105","name":"How to Win Friends and Influence People","author":"Dale Carnegie","year":"1936","genre":"Management","newarrival":"Yes","bestseller":"Yes","language":"English","publisher":"Knopf","price":"500","blurb":"Blurb::How to Win Friends and Influence People:Dale Carnegie:1936","description":"Description::How to Win Friends and Influence People:Dale Carnegie:1936","avgrating":"9","review":"Review::How to Win Friends and Influence People:Dale Carnegie:1936"},
  {"bookid":"106","name":"Perfume","author":"Patrick S\u00fcskind","year":"1985","genre":"Fiction","newarrival":"Yes","bestseller":"No","language":"English","publisher":"Other","price":"280","blurb":"Blurb::Perfume:Patrick S\u00fcskind:1985","description":"Description::Perfume:Patrick S\u00fcskind:1985","avgrating":"8","review":"Review::Perfume:Patrick S\u00fcskind:1985"},
  {"bookid":"107","name":"The Grapes of Wrath","author":"John Steinbeck","year":"1939","genre":"Children","newarrival":"No","bestseller":"Yes","language":"French","publisher":"Pengiun","price":"450","blurb":"Blurb::The Grapes of Wrath:John Steinbeck:1939","description":"Description::The Grapes of Wrath:John Steinbeck:1939","avgrating":"7","review":"Review::The Grapes of Wrath:John Steinbeck:1939"},
  {"bookid":"108","name":"The Shadow of the Wind","author":"Carlos Ruiz Zaf\u00f3n","year":"2001","genre":"Mystery","newarrival":"No","bestseller":"No","language":"English","publisher":"HarperCollins","price":"150","blurb":"Blurb::The Shadow of the Wind:Carlos Ruiz Zaf\u00f3n:2001","description":"Description::The Shadow of the Wind:Carlos Ruiz Zaf\u00f3n:2001","avgrating":"6","review":"Review::The Shadow of the Wind:Carlos Ruiz Zaf\u00f3n:2001"},
  {"bookid":"109","name":"Interpreter of Maladies","author":"Jhumpa Lahiri","year":"2000","genre":"Self Help","newarrival":"Yes","bestseller":"Yes","language":"Latin","publisher":"Knopf","price":"600","blurb":"Blurb::Interpreter of Maladies:Jhumpa Lahiri:2000","description":"Description::Interpreter of Maladies:Jhumpa Lahiri:2000","avgrating":"9","review":"Review::Interpreter of Maladies:Jhumpa Lahiri:2000"},
  {"bookid":"110","name":"The Hitchhikers Guide to the Galaxy","author":"Douglas Adams","year":"1979","genre":"Management","newarrival":"Yes","bestseller":"No","language":"English","publisher":"Other","price":"820","blurb":"Blurb::The Hitchhikers Guide to the Galaxy:Douglas Adams:1979","description":"Description::The Hitchhikers Guide to the Galaxy:Douglas Adams:1979","avgrating":"8","review":"Review::The Hitchhikers Guide to the Galaxy:Douglas Adams:1979"},
  {"bookid":"111","name":"Tuesdays with Morrie","author":"Mitch Albom","year":"1997","genre":"Children","newarrival":"No","bestseller":"Yes","language":"Other","publisher":"Pengiun","price":"630","blurb":"Blurb::Tuesdays with Morrie:Mitch Albom:1997","description":"Description::Tuesdays with Morrie:Mitch Albom:1997","avgrating":"7","review":"Review::Tuesdays with Morrie:Mitch Albom:1997"},
  {"bookid":"112","name":"Gods Little Acre","author":"Erskine Caldwell","year":"1933","genre":"Mystery","newarrival":"No","bestseller":"No","language":"English","publisher":"Pengiun","price":"730","blurb":"Blurb::Gods Little Acre:Erskine Caldwell:1933","description":"Description::Gods Little Acre:Erskine Caldwell:1933","avgrating":"6","review":"Review::Gods Little Acre:Erskine Caldwell:1933"},
  {"bookid":"113","name":"Follow Your Heart","author":"Susanna Tamaro","year":"1994","genre":"Self Help","newarrival":"Yes","bestseller":"Yes","language":"English","publisher":"Pengiun","price":"530","blurb":"Blurb::Follow Your Heart:Susanna Tamaro:1994","description":"Description::Follow Your Heart:Susanna Tamaro:1994","avgrating":"9","review":"Review::Follow Your Heart:Susanna Tamaro:1994"},
  {"bookid":"114","name":"A Wrinkle in Time","author":"Madeleine L Engle","year":"1962","genre":"Management","newarrival":"Yes","bestseller":"No","language":"French","publisher":"Other","price":"780","blurb":"Blurb::A Wrinkle in Time:Madeleine L Engle:1962","description":"Description::A Wrinkle in Time:Madeleine L Engle:1962","avgrating":"8","review":"Review::A Wrinkle in Time:Madeleine L Engle:1962"},
  {"bookid":"115","name":"Long Walk to Freedom","author":"Nelson Mandela","year":"1994","genre":"Fiction","newarrival":"No","bestseller":"Yes","language":"English","publisher":"Other","price":"110","blurb":"Blurb::Long Walk to Freedom:Nelson Mandela:1994","description":"Description::Long Walk to Freedom:Nelson Mandela:1994","avgrating":"7","review":"Review::Long Walk to Freedom:Nelson Mandela:1994"},
  {"bookid":"116","name":"The Old Man and the Sea","author":"Ernest Hemingway","year":"1952","genre":"Children","newarrival":"No","bestseller":"No","language":"Latin","publisher":"Other","price":"580","blurb":"Blurb::The Old Man and the Sea:Ernest Hemingway:1952","description":"Description::The Old Man and the Sea:Ernest Hemingway:1952","avgrating":"6","review":"Review::The Old Man and the Sea:Ernest Hemingway:1952"},
  {"bookid":"117","name":"Life After Life","author":"Raymond Moody","year":"1975","genre":"Mystery","newarrival":"Yes","bestseller":"Yes","language":"English","publisher":"Other","price":"790","blurb":"Blurb::Life After Life:Raymond Moody:1975","description":"Description::Life After Life:Raymond Moody:1975","avgrating":"9","review":"Review::Life After Life:Raymond Moody:1975"},
  {"bookid":"118","name":"Me Before You","author":"Jojo Moyes","year":"2012","genre":"Self Help","newarrival":"Yes","bestseller":"No","language":"Other","publisher":"Other","price":"390","blurb":"Blurb::Me Before You:Jojo Moyes:2012","description":"Description::Me Before You:Jojo Moyes:2012","avgrating":"8","review":"Review::Me Before You:Jojo Moyes:2012"},
  {"bookid":"119","name":"Norwegian Wood","author":"Haruki Murakami","year":"1987","genre":"Management","newarrival":"No","bestseller":"Yes","language":"English","publisher":"HarperCollins","price":"500","blurb":"Blurb::Norwegian Wood:Haruki Murakami:1987","description":"Description::Norwegian Wood:Haruki Murakami:1987","avgrating":"7","review":"Review::Norwegian Wood:Haruki Murakami:1987"},
  {"bookid":"120","name":"Peyton Place","author":"Grace Metalious","year":"1956","genre":"Children","newarrival":"No","bestseller":"No","language":"English","publisher":"Pengiun","price":"430","blurb":"Blurb::Peyton Place:Grace Metalious:1956","description":"Description::Peyton Place:Grace Metalious:1956","avgrating":"6","review":"Review::Peyton Place:Grace Metalious:1956"},
  {"bookid":"121","name":"The Plague","author":"Albert Camus","year":"1947","genre":"Mystery","newarrival":"Yes","bestseller":"Yes","language":"French","publisher":"HarperCollins","price":"360","blurb":"Blurb::The Plague:Albert Camus:1947","description":"Description::The Plague:Albert Camus:1947","avgrating":"9","review":"Review::The Plague:Albert Camus:1947"},
  {"bookid":"122","name":"No Longer Human","author":"Osamu Dazai","year":"1948","genre":"Self Help","newarrival":"Yes","bestseller":"No","language":"English","publisher":"Knopf","price":"750","blurb":"Blurb::No Longer Human:Osamu Dazai:1948","description":"Description::No Longer Human:Osamu Dazai:1948","avgrating":"8","review":"Review::No Longer Human:Osamu Dazai:1948"},
  {"bookid":"123","name":"Mans Search for Meaning","author":"Viktor Frankl","year":"1946","genre":"Management","newarrival":"No","bestseller":"Yes","language":"Latin","publisher":"Other","price":"730","blurb":"Blurb::Mans Search for Meaning:Viktor Frankl:1946","description":"Description::Mans Search for Meaning:Viktor Frankl:1946","avgrating":"7","review":"Review::Mans Search for Meaning:Viktor Frankl:1946"},
  {"bookid":"124","name":"Divine Comedy","author":"Dante Alighieri","year":"1304","genre":"Fiction","newarrival":"No","bestseller":"No","language":"English","publisher":"Pengiun","price":"830","blurb":"Blurb::Divine Comedy:Dante Alighieri:1304","description":"Description::Divine Comedy:Dante Alighieri:1304","avgrating":"6","review":"Review::Divine Comedy:Dante Alighieri:1304"},
  {"bookid":"125","name":"The Prophet","author":"Kahlil Gibran","year":"1923","genre":"Children","newarrival":"Yes","bestseller":"Yes","language":"Other","publisher":"HarperCollins","price":"550","blurb":"Blurb::The Prophet:Kahlil Gibran:1923","description":"Description::The Prophet:Kahlil Gibran:1923","avgrating":"9","review":"Review::The Prophet:Kahlil Gibran:1923"},
  {"bookid":"126","name":"The Exorcist","author":"William Peter Blatty","year":"1971","genre":"Mystery","newarrival":"Yes","bestseller":"No","language":"English","publisher":"Knopf","price":"700","blurb":"Blurb::The Exorcist:William Peter Blatty:1971","description":"Description::The Exorcist:William Peter Blatty:1971","avgrating":"8","review":"Review::The Exorcist:William Peter Blatty:1971"},
  {"bookid":"127","name":"The Gruffalo","author":"Julia Donaldson","year":"1999","genre":"Self Help","newarrival":"No","bestseller":"Yes","language":"English","publisher":"Other","price":"410","blurb":"Blurb::The Gruffalo:Julia Donaldson:1999","description":"Description::The Gruffalo:Julia Donaldson:1999","avgrating":"7","review":"Review::The Gruffalo:Julia Donaldson:1999"},
  {"bookid":"128","name":"The Cat in the Hat","author":"Dr. Seuss","year":"1957","genre":"Management","newarrival":"No","bestseller":"No","language":"French","publisher":"Pengiun","price":"180","blurb":"Blurb::The Cat in the Hat:Dr. Seuss:1957","description":"Description::The Cat in the Hat:Dr. Seuss:1957","avgrating":"6","review":"Review::The Cat in the Hat:Dr. Seuss:1957"},
  {"bookid":"129","name":"Diana: Her True Story","author":"Andrew Morton","year":"1992","genre":"Children","newarrival":"Yes","bestseller":"Yes","language":"English","publisher":"Pengiun","price":"830","blurb":"Blurb::Diana: Her True Story:Andrew Morton:1992","description":"Description::Diana: Her True Story:Andrew Morton:1992","avgrating":"9","review":"Review::Diana: Her True Story:Andrew Morton:1992"},
  {"bookid":"130","name":"The Help","author":"Kathryn Stockett","year":"2009","genre":"Mystery","newarrival":"Yes","bestseller":"No","language":"Latin","publisher":"Pengiun","price":"530","blurb":"Blurb::The Help:Kathryn Stockett:2009","description":"Description::The Help:Kathryn Stockett:2009","avgrating":"8","review":"Review::The Help:Kathryn Stockett:2009"},
  {"bookid":"131","name":"Catch-22","author":"Joseph Heller","year":"1961","genre":"Self Help","newarrival":"No","bestseller":"Yes","language":"English","publisher":"Other","price":"670","blurb":"Blurb::Catch-22:Joseph Heller:1961","description":"Description::Catch-22:Joseph Heller:1961","avgrating":"7","review":"Review::Catch-22:Joseph Heller:1961"},
  {"bookid":"132","name":"The Stranger","author":"Albert Camus","year":"1942","genre":"Management","newarrival":"No","bestseller":"No","language":"Other","publisher":"Other","price":"790","blurb":"Blurb::The Stranger:Albert Camus:1942","description":"Description::The Stranger:Albert Camus:1942","avgrating":"6","review":"Review::The Stranger:Albert Camus:1942"},
  {"bookid":"133","name":"Eye of the Needle","author":"Ken Follett","year":"1978","genre":"Fiction","newarrival":"Yes","bestseller":"Yes","language":"English","publisher":"Other","price":"810","blurb":"Blurb::Eye of the Needle:Ken Follett:1978","description":"Description::Eye of the Needle:Ken Follett:1978","avgrating":"9","review":"Review::Eye of the Needle:Ken Follett:1978"},
  {"bookid":"134","name":"A Brief History of Time","author":"Stephen Hawking","year":"1988","genre":"Children","newarrival":"Yes","bestseller":"No","language":"English","publisher":"Other","price":"510","blurb":"Blurb::A Brief History of Time:Stephen Hawking:1988","description":"Description::A Brief History of Time:Stephen Hawking:1988","avgrating":"8","review":"Review::A Brief History of Time:Stephen Hawking:1988"},
  {"bookid":"135","name":"The Lovely Bones","author":"Alice Sebold","year":"2002","genre":"Mystery","newarrival":"No","bestseller":"Yes","language":"French","publisher":"Other","price":"510","blurb":"Blurb::The Lovely Bones:Alice Sebold:2002","description":"Description::The Lovely Bones:Alice Sebold:2002","avgrating":"7","review":"Review::The Lovely Bones:Alice Sebold:2002"},
  {"bookid":"136","name":"Wild Swans","author":"Jung Chang","year":"1992","genre":"Self Help","newarrival":"No","bestseller":"No","language":"English","publisher":"HarperCollins","price":"110","blurb":"Blurb::Wild Swans:Jung Chang:1992","description":"Description::Wild Swans:Jung Chang:1992","avgrating":"6","review":"Review::Wild Swans:Jung Chang:1992"},
  {"bookid":"137","name":"Santa Evita","author":"Tom\u00e1s Eloy Mart\u00ednez","year":"1995","genre":"Management","newarrival":"Yes","bestseller":"Yes","language":"Latin","publisher":"Pengiun","price":"760","blurb":"Blurb::Santa Evita:Tom\u00e1s Eloy Mart\u00ednez:1995","description":"Description::Santa Evita:Tom\u00e1s Eloy Mart\u00ednez:1995","avgrating":"9","review":"Review::Santa Evita:Tom\u00e1s Eloy Mart\u00ednez:1995"},
  {"bookid":"138","name":"Night","author":"Elie Wiesel","year":"1958","genre":"Children","newarrival":"Yes","bestseller":"No","language":"English","publisher":"HarperCollins","price":"250","blurb":"Blurb::Night:Elie Wiesel:1958","description":"Description::Night:Elie Wiesel:1958","avgrating":"8","review":"Review::Night:Elie Wiesel:1958"},
  {"bookid":"139","name":"Confucius from the Heart","author":"Yu Dan","year":"2006","genre":"Mystery","newarrival":"No","bestseller":"Yes","language":"Other","publisher":"Knopf","price":"560","blurb":"Blurb::Confucius from the Heart:Yu Dan:2006","description":"Description::Confucius from the Heart:Yu Dan:2006","avgrating":"7","review":"Review::Confucius from the Heart:Yu Dan:2006"},
  {"bookid":"140","name":"The Total Woman","author":"Marabel Morgan","year":"1974","genre":"Self Help","newarrival":"No","bestseller":"No","language":"English","publisher":"Other","price":"710","blurb":"Blurb::The Total Woman:Marabel Morgan:1974","description":"Description::The Total Woman:Marabel Morgan:1974","avgrating":"6","review":"Review::The Total Woman:Marabel Morgan:1974"},
  {"bookid":"141","name":"Knowledge-value Revolution","author":"Taichi Sakaiya","year":"1985","genre":"Management","newarrival":"Yes","bestseller":"Yes","language":"English","publisher":"Pengiun","price":"750","blurb":"Blurb::Knowledge-value Revolution:Taichi Sakaiya:1985","description":"Description::Knowledge-value Revolution:Taichi Sakaiya:1985","avgrating":"9","review":"Review::Knowledge-value Revolution:Taichi Sakaiya:1985"},
  {"bookid":"142","name":"What Color is Your Parachute?","author":"Richard Nelson Bolles","year":"1970","genre":"Fiction","newarrival":"Yes","bestseller":"No","language":"Latin","publisher":"HarperCollins","price":"700","blurb":"Blurb::What Color is Your Parachute?:Richard Nelson Bolles:1970","description":"Description::What Color is Your Parachute?:Richard Nelson Bolles:1970","avgrating":"8","review":"Review::What Color is Your Parachute?:Richard Nelson Bolles:1970"},
  {"bookid":"143","name":"The Dukan Diet","author":"Pierre Dukan","year":"2000","genre":"Children","newarrival":"No","bestseller":"Yes","language":"English","publisher":"Knopf","price":"490","blurb":"Blurb::The Dukan Diet:Pierre Dukan:2000","description":"Description::The Dukan Diet:Pierre Dukan:2000","avgrating":"7","review":"Review::The Dukan Diet:Pierre Dukan:2000"},
  {"bookid":"144","name":"The Gospel According to Peanuts","author":"Robert L. Short","year":"1965","genre":"Mystery","newarrival":"No","bestseller":"No","language":"Other","publisher":"Other","price":"590","blurb":"Blurb::The Gospel According to Peanuts:Robert L. Short:1965","description":"Description::The Gospel According to Peanuts:Robert L. Short:1965","avgrating":"6","review":"Review::The Gospel According to Peanuts:Robert L. Short:1965"},
  {"bookid":"145","name":"Life of Pi","author":"Yann Martel","year":"2001","genre":"Self Help","newarrival":"Yes","bestseller":"No","language":"English","publisher":"Pengiun","price":"520","blurb":"Blurb::Life of Pi:Yann Martel:2001","description":"Description::Life of Pi:Yann Martel:2001","avgrating":"9","review":"Review::Life of Pi:Yann Martel:2001"},
  {"bookid":"146","name":"The Giver","author":"Lois Lowry","year":"1993","genre":"Management","newarrival":"No","bestseller":"Yes","language":"Other","publisher":"Pengiun","price":"820","blurb":"Blurb::The Giver:Lois Lowry:1993","description":"Description::The Giver:Lois Lowry:1993","avgrating":"8","review":"Review::The Giver:Lois Lowry:1993"},
  {"bookid":"147","name":"The Front Runner","author":"Patricia Nell Warren","year":"1974","genre":"Children","newarrival":"No","bestseller":"No","language":"Other","publisher":"Pengiun","price":"370","blurb":"Blurb::The Front Runner:Patricia Nell Warren:1974","description":"Description::The Front Runner:Patricia Nell Warren:1974","avgrating":"7","review":"Review::The Front Runner:Patricia Nell Warren:1974"}
  ];
var users=[{userid:1,name:'test',password:'test'},{userid:2,name:'james',password:'james'},{userid:3,name:'jack',password:'jack'}];
var favorites=[{userid:3,bookid:11},{userid:3,bookid:18}];
app.get("/booksapp/books/:category?", function(req, res) {
  let name = req.params.category;
  let page= +req.query.page;
  let newarrival= req.query.newarrival;
  let language= req.query.language;
  //console.log(language);
  let bestSeller= req.query.bestseller;
  console.log(newarrival)
  page= isNaN(page)? 1:page;
  let arr;
  if(name!=undefined)
  {
    arr = list.filter(obj => obj.genre.toLowerCase() === name.toLowerCase());
  }
  let dispList = name === undefined ? list : arr;
  if(newarrival!= undefined)
  dispList= dispList.filter(obj=> obj.newarrival.toLowerCase()===newarrival.toLowerCase());
  //let respArr= pagination(dispList,page);

  //console.log(dispList);

  if(language!= undefined)
  {
    language= language.split(',');
    //console.log(language);
    let arr1= dispList.filter(obj=>
      language.find(obj1=> obj1===obj.language)
   );
    dispList= arr1;
  }
 
    if(bestSeller!= undefined)
  dispList= dispList.filter(obj=> obj.bestseller===bestSeller);
   
      //make bestseller list
  let bestsellerArr=[]
  bestList.map(obj=>{
    let arr= dispList.filter(obj1=> obj1.bestseller===obj);
    let obj2= {totalNum: arr.length, refineValue: obj};
    bestsellerArr.push(obj2);
  });
  //console.log(bestsellerArr);
  //make language list
  let langArr=[];
  langList.map(obj=>{
    let arr= dispList.filter(obj1=> obj1.language===obj);
    let obj2= {totalNum: arr.length, refineValue: obj};
    langArr.push(obj2);
  });
  //console.log(langArr);
  //make publisher
  let pubArr=[];
  let pubList= publisherList(dispList);
  //console.log(pubList)
  pubList.map(obj=>{
    let arr= dispList.filter(obj1=> obj1.publisher===obj);
    let obj2= {totalNum: arr.length, refineValue: obj};
    pubArr.push(obj2);
  });
  //console.log(pubArr);
  //res.send(respArr);
  respArr= pagination(dispList,page);
  let len= dispList.length;
  let quo= Math.floor(len/10);
  let rem= len%10;
  //console.log(quo,rem);
  let extra= rem===0? 0:1
  let numofpages= quo+extra;
  let pageInfo={pageNumber: page, numberOfPages: numofpages,numOfItems: 10,totalItemCount:dispList.length};
  let refineOptJson= {bestseller: bestsellerArr, language:langArr, publisher: pubArr};
  res.json({
    pageInfo: pageInfo,
    refineOptions: refineOptJson,
    books: respArr,
    
  });
});
app.get("/booksapp/book/:bookid", function(req, res) {
  let bookid = +req.params.bookid;
  let book= list.find(obj=> +obj.bookid===+bookid)
  res.send(book);
  
});
app.post("/booksapp/book", function(req,res)
{
 let body= {...req.body};
 let book= list.find(obj=> obj.name===body.name);
 if(book)
 res.status(401).send('Book already present')
 else
 {
   let obj={bookid:list.length+1,...body};
   list.push(obj)
   res.send(obj);
 }
 
})

app.post("/booksapp/loginuser", function(req,res)
{
 let body= {name: req.body.name, password: req.body.password};
 let obj= users.find(obj=> obj.name===body.name && obj.password===body.password);
 if(obj===undefined)
 res.status(401).send('Login Failed!!')
 else
 {
   res.send(obj);
 }
 
});
app.post("/booksapp/newuser", function(req,res)
{
  let body={userid: users.length+1, name: req.body.name, password: req.body.password};
  let obj= users.find(obj=> obj.name===body.name);
  if(obj!=undefined)
  res.status(400).send('Database Error');
  else
  {
    users.push(body);
    let reObj= {name: body.name, password: body.password}
    res.send(reObj);
  }
});
app.post("/booksapp/favourites/:userid", function(req,res)
  {
    let body={bookid: req.body.bookid, userid: +req.params.userid};
    let cb= favorites.find(obj=> +obj.userid === +req.params.userid && +obj.bookid===+req.body.bookid);
    if(!cb)
    favorites.push(body);
    let fbody= !cb? body: {"error":"Book already added to favorites"}
    res.send(fbody);
  });
app.get("/booksapp/favourites/:userid", function(req,res)
{
  let page= +req.query.page;
  page= isNaN(page)? 1:page;
  let dispArr= [];
  let userid= +req.params.userid;
  let list1= favorites.filter(obj=> obj.userid===userid);
  //console.log(list1);
  list1.map(obj=>{
    let obj2= list.find(obj1=> +obj1.bookid===+obj.bookid);
    //console.log(obj2);
    dispArr.push(obj2)
  });
//res.send(dispArr);
//make bestseller list
let bestsellerArr=[]
bestList.map(obj=>{
  let arr= dispArr.filter(obj1=> obj1.bestseller===obj);
  let obj2= {totalNum: arr.length, refineValue: obj};
  bestsellerArr.push(obj2);
});
//console.log(bestsellerArr);
//make language list
let langArr=[];
let langList1= languageList(dispArr);
langList1.map(obj=>{
  let arr= dispArr.filter(obj1=> obj1.language===obj);
  let obj2= {totalNum: arr.length, refineValue: obj};
  langArr.push(obj2);
});
//console.log(langArr);
//make publisher
let pubArr=[];
let pubList= publisherList(dispArr);
//console.log(pubList)
pubList.map(obj=>{
  let arr= dispArr.filter(obj1=> obj1.publisher===obj);
  let obj2= {totalNum: arr.length, refineValue: obj};
  pubArr.push(obj2);
});
let respArr= pagination(dispArr,page);
  let len= dispArr.length;
  let quo= Math.floor(len/10);
  let rem= len%10;
  //console.log(quo,rem);
  let extra= rem===0? 0:1
  let numofpages= quo+extra;
  let pageInfo={pageNumber: page, numberOfPages: numofpages,numOfItems: 10,totalItemCount:dispArr.length};
  let refineOptJson= {bestseller: bestsellerArr, language:langArr, publisher: pubArr};
  res.json({
    data: respArr,
    pageInfo: pageInfo,
    refineOptions: refineOptJson
  });
});

function publisherList(arr)
{
  let pubArr=[];
  arr.map(obj=>{
    let fObj= pubArr.find(obj1=> obj1===obj.publisher)
    if(fObj===undefined)
    pubArr.push(obj.publisher)
  });
  console.log(pubArr);
  return pubArr;

}
function languageList(arr)
{
  let langArr=[];
  arr.map(obj=>{
    let fObj= langArr.find(obj1=> obj1===obj.language)
    if(fObj===undefined)
    langArr.push(obj.language)
  });
  console.log(langArr);
  return langArr;

}

function pagination(obj, page) {
    const postCount = obj.length;
    const perPage = 10;
    //const pageCount = Math.ceil(postCount / perPage);
    var resArr = obj;
    resArr = resArr.slice(page * 10 - 10, page * 10);
    return resArr;
  }

app.listen(port, () => console.log(`Node app listening on port ${port}!`));

// end of file