/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package htmlgen;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

 
public class Htmlgen {
      //  public static   String[] values=new String[20600];
        public static   String[] values_template=new String[20600];
        //public String 
        public static   String[] values_generated=new String[200];
        public static String str_filecontent;
        public static ArrayList<String> allPlaylistNames = new ArrayList<String>();
        
        
       
 public static void getstring(String loc){
     
 
		BufferedReader br = null;
           
		try {
 
			String sCurrentLine;
 
			br = new BufferedReader(new FileReader(loc));
                        int count=-1;
			while ((sCurrentLine = br.readLine()) != null) {
                    allPlaylistNames.add(sCurrentLine);
                                
                           // System.out.println(sCurrentLine);
                                
			}
                        System.out.println("count"+count);
                        int i=0;
                 
                    
 
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				if (br != null)br.close();
			} catch (IOException ex) {
				ex.printStackTrace();
			}
		}
 }
 
 
 
 public static String readFileAsString(String filePath) throws IOException {
        StringBuffer fileData = new StringBuffer();
        BufferedReader reader = new BufferedReader(
                new FileReader(filePath));
        char[] buf = new char[1024];
        int numRead=0;
        while((numRead=reader.read(buf)) != -1){
            String readData = String.valueOf(buf, 0, numRead);
            fileData.append(readData);
        }
        reader.close();
        return fileData.toString();
    }
 
 public static void template(String src)
 {
     BufferedReader br = null;
 		try {
                    str_filecontent = readFileAsString(src);
                 //   System.out.println(str_filecontent);
 			/*String sCurrentLine;
 			br = new BufferedReader(new FileReader(src));
                        int count=-1;
                        br.re
			while ((sCurrentLine = br.readLine()) != null) {
                            count++;    
                            values_template[count]=sCurrentLine;
                            // System.out.println(sCurrentLine);
 			}
                      //  System.out.println("count"+count);
                        int i=0;
                        while(values_template[i]!=null)
                        {
                            System.out.println(values_template[i]);
                            i++;
                        }*/
                    
                    
 		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				if (br != null)br.close();
			} catch (IOException ex) {
				ex.printStackTrace();
			}
		}
 }
 public static void generate(){
     
        // The name of the file to open.
        String fileName = "d:\\guvi\\tamil_new\\gui++.html";

        try {
            // Assume default encoding.
            FileWriter fileWriter =
                new FileWriter(fileName);

            // Always wrap FileWriter in BufferedWriter.
            BufferedWriter bufferedWriter =
                new BufferedWriter(fileWriter);

            // Note that write() does not automatically
            // append a newline character.
            int i=0;
            int h3_start = str_filecontent.indexOf("<h3>") + 4;
            //System.out.println(str_filecontent);
            int h3_end = str_filecontent.indexOf("</h3>") ;
            String org_h3 = str_filecontent.substring(h3_start, h3_end);
            str_filecontent = str_filecontent.replace(org_h3, "&nbsp;&nbsp;&nbsp;"+allPlaylistNames.get(0));
            System.out.println(allPlaylistNames.get(0));
            
            int li_start = str_filecontent.indexOf("<div id=\"thumbs\">") + 17;
           int li_end = str_filecontent.indexOf("</div> <!--end-->") ;
            String org_li = str_filecontent.substring(li_start, li_end);
            str_filecontent = str_filecontent.replace(org_li, generate_div());
            
            
       
            
          /*  while(values_template[i]!=null)
            {
                if(values_template[i].contains("<h3>")){
                        String old=values_template[i].substring(values_template[i].indexOf("<h3>"),values_template[i].indexOf("</h3>"));
                        String newstring=values[0];
                        values_template[i]=values_template[i].replaceAll(old, newstring);
                }else if(values_template[i].contains("<ul class=\"Playlist\">")){
                      
                  
             //    generate_div();
                
                }
                  
                
                  
                bufferedWriter.write(values_template[i].toString());
                bufferedWriter.newLine();
                i++;
            }*/
            
         bufferedWriter.write(str_filecontent);
            

            // Always close files.
            bufferedWriter.close();
        }
        catch(IOException ex) {
            System.out.println(
                "Error writing to file '"
                + fileName + "'");
            // Or we could just do this:
            // ex.printStackTrace();
        }
    
 }
 public  static String generate_div(){
     
     String div_temp="";
     int size=allPlaylistNames.size();
      for(int limit=1;limit<size;limit=limit+2){
          
          
       
          div_temp+="<div class=\"carousel\">\n" +                           
"                                        <img id=\"https://www.youtube.com/watch?v="+ allPlaylistNames.get(limit+1) +"\" src=\"http://img.youtube.com/vi/"+allPlaylistNames.get(limit+1)+"/2.jpg\" alt=\""+ allPlaylistNames.get(limit+0)+"\" height=\"100\" width=\"100\""
                  + " >\n<div><p id=\"https://www.youtube.com/watch?v="+ allPlaylistNames.get(limit+1)+"\"</br>"+ allPlaylistNames.get(limit)+"</p></div></div>\n	";
         
      }
      System.out.println(div_temp);
      return div_temp;
       
}
                    
 
	public static void main(String[] args) {
                   getstring("d:\\guvi\\tamil\\gui++.html");
                   template("d:\\guvi1\\CPuzzles.html");
                   generate();
            
 	}
}